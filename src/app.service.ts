import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor(public appRepo: AppRepository) {}

  async getFiveQuestions() {
    const allQuestions = await this.appRepo.getAllQuestions();

    const uniqueIds = new Set();
    while (uniqueIds.size < 5) {
      let randomIndex = Math.floor(Math.random() * 10) + 1;
      uniqueIds.add(randomIndex);
    }

    const selectedQuestions = Array.from(uniqueIds).map((index) => {
      return allQuestions.find((question) => question.id === index);
    });

    return selectedQuestions;
  }

  async getToken() {
    const response = await axios.post('https://api.jdoodle.com/v1/auth-token', {
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    });
    return response.data;
  }

  async executeCode(language: string = 'nodejs', script: string): Promise<any> {
    const url = 'https://api.jdoodle.com/v1/execute';
    const payload = {
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
      script,
      language,
      //stdin,
      versionIndex: '3',
    };
    try {
      const response = await axios.post(url, payload);
      return response.data;
    } catch (error) {
      console.error('Error >> ', error);
    }
  }
}
