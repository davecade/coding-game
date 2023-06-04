import { Injectable } from '@nestjs/common';
import MockDatabase from './models/MockDatabase';
// import { Question } from './models/Question';

@Injectable()
export class AppRepository {
  private db = [...MockDatabase];
  private selectedQuestions = [];

  async getAllQuestions() {
    return this.db;
  }

  async getSelectedQuestions() {
    if (this.selectedQuestions.length === 0) {
      this.selectedQuestions = this.db.slice(0, 5);
    }
    return this.selectedQuestions;
  }

  async getQuestionById(id: number) {
    return this.db.find((question) => question.id === id);
  }

  async updateAllQuestions(newQuestions) {
    this.db = [...newQuestions];
  }

  async updateSelectedQuestions(newSelectedQuestions): Promise<void> {
    this.selectedQuestions = [...newSelectedQuestions];
  }

  async updateQuestion(id: number, payload) {
    const questionToUpdate = await this.getQuestionById(id);
    if (!questionToUpdate) {
      return undefined;
    }
    const updatedQuestion = {
      ...questionToUpdate,
      ...payload,
    };

    this.db = this.db.map((question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question,
    );
    this.selectedQuestions = this.selectedQuestions.map((question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question,
    );

    return updatedQuestion;
  }
}
