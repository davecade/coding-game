import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor(public appRepo: AppRepository) {}

  async getQuestions() {
    const response = await this.appRepo.getAllQuestions();
    return response;
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
