import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/questions')
  async getFiveQuestions() {
    return await this.appService.getFiveQuestions();
  }

  @Get('/token')
  async getToken() {
    return this.appService.getToken();
  }

  @Post('/execute')
  async executeCode(
    @Body('language') language: string,
    @Body('script') script: string,
    @Body('stdin') stdin: string,
  ) {
    return this.appService.executeCode(language, script);
  }
}
