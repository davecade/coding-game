import { Injectable } from '@nestjs/common';
import MockDatabase from './models/MockDatabase';
import { Question } from './types/Question';

@Injectable()
export class AppRepository {
  private db: Question[] = [...MockDatabase];
  private selectedQuestions: Question[] = [];

  async getAllQuestions(): Promise<Question[]> {
    return this.db;
  }

  async resetAllQuestions(): Promise<Question[]> {
    this.db = [...MockDatabase];
    this.selectedQuestions = [];
    return this.db;
  }

  async getSelectedQuestions(): Promise<Question[]> {
    if (this.selectedQuestions.length === 0) {
      this.selectedQuestions = this.db.slice(0, 5);
    }
    return this.selectedQuestions;
  }

  async getQuestionById(id: number): Promise<Question | undefined> {
    return this.db.find((question: Question) => question.id === id);
  }

  async updateAllQuestions(newQuestions: Question[]): Promise<void> {
    this.db = [...newQuestions];
  }

  async updateSelectedQuestions(
    newSelectedQuestions: Question[],
  ): Promise<void> {
    this.selectedQuestions = [...newSelectedQuestions];
  }

  async updateQuestion(
    id: number,
    payload: Partial<Question>,
  ): Promise<Question | undefined> {
    const questionToUpdate = await this.getQuestionById(id);
    if (!questionToUpdate) {
      return undefined;
    }
    const updatedQuestion: Question = {
      ...questionToUpdate,
      ...payload,
    };

    this.db = this.db.map((question: Question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question,
    );
    this.selectedQuestions = this.selectedQuestions.map((question: Question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question,
    );

    return updatedQuestion;
  }
}
