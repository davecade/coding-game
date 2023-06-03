import { Injectable } from '@nestjs/common';
import MockDatabase from './models/MockDatabase';

@Injectable()
export class AppRepository {
  async getAllQuestions() {
    return MockDatabase;
  }
}
