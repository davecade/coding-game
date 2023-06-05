import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SubmitCodeDto {
  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @IsNotEmpty()
  @IsString()
  solution: string;
}
