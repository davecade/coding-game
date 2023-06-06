import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Res,
  Param,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SubmitCodeDto } from './models/request/submitCode .dto';

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
    @Body() { questionId, solution }: SubmitCodeDto,
  ): Promise<void> {
    const result = await this.appService.submitCode(questionId, solution);
    return res.status(HttpStatus.OK).json(result);
  }

  @Patch('/reset/:id')
  async resetQuestionById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res,
  ): Promise<void> {
    const resettedQuestion = await this.appService.resetQuestionById(id);
    return res.status(HttpStatus.OK).json(resettedQuestion);
  }
}
