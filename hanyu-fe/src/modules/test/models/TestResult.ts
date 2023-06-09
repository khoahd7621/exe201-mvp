import { PartResult, UserAnswer } from ".";

export type TestResult = {
  id?: string;
  userId: string;
  testId: number;
  createdAt: Date;
  totalScore: number;
  realScore: number;
  partResults: PartResult[];
  userAnswers: UserAnswer[];
};
