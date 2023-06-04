export interface Question {
  id: number;
  title: string;
  submitted: boolean;
  description: string;
  testCases: any;
  failedCases: any;
  userResults: any;
  expectedResults: any;
  solution: string;
  isSolutionCorrect: boolean;
}
