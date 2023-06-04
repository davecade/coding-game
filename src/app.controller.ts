import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/questions')
  async getRandomQuestions(@Res() res): Promise<void> {
    const questions = await this.appService.getRandomQuestions();
    return res.status(HttpStatus.OK).json(questions);
  }

  @Get('/token')
  async getToken(@Res() res): Promise<void> {
    const token = await this.appService.getToken();
    return res.status(HttpStatus.OK).json(token);
  }

  @Post('/submit')
  async submitCode(
    @Res() res,
    @Body('questionId') questionId: number,
    @Body('solution') solution: string,
  ): Promise<void> {
    const result = await this.appService.submitCode(questionId, solution);
    return res.status(HttpStatus.OK).json(result);
  }
}
