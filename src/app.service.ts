import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import axios from 'axios';
import { VM } from 'vm2';
import solutions from './utils/solution-utils';
import { ConfigService } from '@nestjs/config';

const NUM_QUESTIONS_TO_SELECT = 5;

@Injectable()
export class AppService {
  constructor(
    private readonly appRepo: AppRepository,
    private readonly configService: ConfigService,
  ) {}

  private testAllCases(testCases: any, userCode: string, questionId: number) {
    try {
      const validSolution = solutions()[questionId];
      const userFunctionName = this.extractFunctionName(userCode);
      const vm = new VM();
      vm.run(userCode);

      let failedCases = [];
      let hasPassed = true;

      for (let i = 0; i < testCases.length; i++) {
        const input = testCases[i];
        const userOutput = vm.run(
          `${userFunctionName}(${JSON.stringify(input)})`,
        );
        const expectedOutput = validSolution(input);

        if (userOutput !== expectedOutput) {
          hasPassed = false;
          failedCases.push(input);
        }
      }
      return {
        hasPassed,
        failedCases,
      };
    } catch (e) {
      console.log('Execution failed');
      return {
        hasPassed: false,
        failedCases: [...testCases],
      };
    }
  }

  private extractFunctionName(funcString: string): string {
    const trimmedFuncString = funcString.trim();
    const result = /^(?:const|let|var|function)?\s*([^\s=()]+)/.exec(
      trimmedFuncString,
    );
    return result ? result[1] : '';
  }

  async getFiveRandomQuestions() {
    const allQuestions = await this.appRepo.getAllQuestions();
    const uniqueIds = this.getRandomUniqueIds(
      NUM_QUESTIONS_TO_SELECT,
      allQuestions.length,
    );

    const selectedQuestions = allQuestions.filter((question) =>
      uniqueIds.has(question.id),
    );
    await this.appRepo.updateSelectedQuestions(selectedQuestions);

    return selectedQuestions;
  }

  async getToken() {
    console.log('ID: ', this.configService.get('JDOODLE_CLIENT_ID'));
    console.log('SECRET: ', this.configService.get('JDOODLE_CLIENT_SECRET'));
    try {
      return {
        id: this.configService.get('JDOODLE_CLIENT_ID'),
        secret: this.configService.get('JDOODLE_CLIENT_SECRET'),
      };
      const response = await axios.post(
        'https://api.jdoodle.com/v1/auth-token',
        {
          clientId: this.configService.get('JDOODLE_CLIENT_ID'),
          clientSecret: this.configService.get('JDOODLE_CLIENT_SECRET'),
        },
      );
      return response.data;
    } catch (e) {
      console.log('Failed to get token');
      return {
        id: this.configService.get('JDOODLE_CLIENT_ID'),
        secret: this.configService.get('JDOODLE_CLIENT_SECRET'),
      };
    }
  }

  async executeUserCode(questionId: number, userCode: string) {
    const targetQuestion = await this.appRepo.getQuestionById(questionId);
    const testCases = targetQuestion.testCases;
    const results = this.testAllCases(testCases, userCode, questionId);
    return results;
  }

  async submitCode(questionId: number, solution: string) {
    const executionResult = await this.executeUserCode(questionId, solution);
    const payload = {
      submitted: true,
      solution: solution,
      isSolutionCorrect: executionResult.hasPassed,
      failedCases: executionResult.failedCases,
    };
    await this.appRepo.updateQuestion(questionId, payload);

    return this.appRepo.getSelectedQuestions();
  }

  private getRandomUniqueIds(numIds: number, maxId: number): Set<number> {
    const uniqueIds = new Set<number>();
    while (uniqueIds.size < numIds) {
      let randomId = Math.floor(Math.random() * maxId) + 1;
      uniqueIds.add(randomId);
    }
    return uniqueIds;
  }
}
