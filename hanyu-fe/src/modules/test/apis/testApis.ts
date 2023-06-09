import AxiosClient from "~/config/AxiosClient";
import { TestResult } from "../models";

const testApi = {
  saveUserAnswer: (data: TestResult): Promise<void> =>
    AxiosClient.post("/user/test-result", {
      testId: data.testId,
      totalScore: data.totalScore,
      realScore: data.realScore,
      createdAt: data.createdAt,
      partResults: data.partResults.map((part) => ({
        label: part.label,
        rate: part.rate,
      })),
      userAnswers: data.userAnswers.map((userAnswer) => ({
        questionId: userAnswer.questionId,
        answer: userAnswer.answer,
      })),
    }),
  getTestResults: (): Promise<TestResult[]> => AxiosClient.get("/user/test-result"),
};

export default testApi;
