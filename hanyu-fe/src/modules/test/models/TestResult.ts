import { PartResult } from ".";

export type TestResult = {
  id: number;
  userId: number;
  testId: number;
  createdAt: Date;
  totalScore: number;
  realScore: number;
  partResults: PartResult[];
};
