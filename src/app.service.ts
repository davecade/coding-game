import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import axios from 'axios';
import { VM } from 'vm2';
import solutions from './utils/solution-utils';

@Injectable()
export class AppService {
  constructor(public appRepo: AppRepository) {}

  async getFiveRandomQuestions() {
    const allQuestions = await this.appRepo.getAllQuestions();

    const uniqueIds = new Set();
    while (uniqueIds.size < 5) {
      let randomIndex = Math.floor(Math.random() * 10) + 1;
      uniqueIds.add(randomIndex);
    }

    const selectedQuestions = Array.from(uniqueIds).map((index) => {
      return allQuestions.find((question) => question.id === index);
    });

    await this.appRepo.updateSelectedQuestions(selectedQuestions);
    return selectedQuestions;
  }

  async getToken() {
    const response = await axios.post('https://api.jdoodle.com/v1/auth-token', {
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    });
    return response.data;
  }

  async executeUserCode(questionId: number, userCode: string) {
    function extractFunctionName(funcString) {
      const trimmedFuncString = funcString.trim();
      const result = /^(?:const|let|var|function)?\s*([^\s=()]+)/.exec(
        trimmedFuncString,
      );
      return result && result[1];
    }

    const testAllCases = (testCases) => {
      const validSolution = solutions()[questionId];
      const userFunctionName = extractFunctionName(userCode);
      const vm = new VM();
      vm.run(userCode);

      const failedCases = [];
      let hasPassed = true;

      for (let i = 0; i < testCases.length; i++) {
        const input = testCases[i];
        const userOutput = vm.run(
          `${userFunctionName}(${JSON.stringify(input)})`,
        );
        const expectedOutput = validSolution(input);

        if (userOutput !== expectedOutput) {
          failedCases.push(input);
          hasPassed = false;
        }
      }

      return {
        hasPassed,
        failedCases,
      };
    };

    try {
      const targetQuestion = await this.appRepo.getQuestionById(questionId);
      const testCases = targetQuestion.testCases;
      const results = testAllCases(testCases);
      console.log('results >> ', results);
      if (results.hasPassed) {
        return 'success';
      }
    } catch (e) {
      console.log('Test execution failed');
    }
    return 'failed';
  }

  async submitCode(id: number, solution: string): Promise<any> {
    try {
      const executionResult = await this.executeUserCode(id, solution);
      console.log('executionResult >> ', executionResult);
      const targetQuestion = await this.appRepo.getQuestionById(id);

      const updatedQuestion = {
        ...targetQuestion,
        submitted: true,
        solution: solution,
        isSolutionCorrect: executionResult === 'success',
      };
      await this.appRepo.updateQuestion(updatedQuestion);
      return this.appRepo.getSelectedQuestions();
    } catch (error) {
      console.log('Submission failed');
      return this.appRepo.getSelectedQuestions();
    }
  }
}
