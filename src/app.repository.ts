import { Injectable } from '@nestjs/common';
import MockDatabase from './models/MockDatabase';

let db = [...MockDatabase];
let selectedQuestions = [];

@Injectable()
export class AppRepository {
  async getAllQuestions() {
    return db;
  }

  async getSelectedQuestions() {
    if (selectedQuestions.length === 0) {
      return db.filter((item, index) => index < 5);
    }
    return selectedQuestions;
  }

  async getQuestionById(id) {
    return db.find((question) => question.id === id);
  }

  async updateAllQuestions(newQuestions) {
    db = [...newQuestions];
  }

  async updateSelectedQuestions(newSelectedQuestions) {
    selectedQuestions = [...newSelectedQuestions];
  }

  async updateQuestion(newQuestion) {
    const dbIndex = db.findIndex((question) => newQuestion.id === question.id);
    if (dbIndex !== -1) {
      db[dbIndex] = newQuestion;
    }
    const selectedQuestionIndex = selectedQuestions.findIndex(
      (question) => newQuestion.id === question.id,
    );

    if (selectedQuestionIndex !== -1) {
      selectedQuestions[selectedQuestionIndex] = newQuestion;
    }
    this.updateAllQuestions(db);
    this.updateSelectedQuestions(selectedQuestions);
  }
}
