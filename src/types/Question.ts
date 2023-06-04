export interface Question {
  id: number;
  title: string;
  submitted: boolean;
  description: string;
  testCases: any;
  failedCases: any;
  solution: string;
  isSolutionCorrect: boolean;
}
