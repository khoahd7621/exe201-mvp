import { Question } from "./Question";

export type SelectedQuestionResult = {
  question: Question;
  selectedAnswer: string;
  isCorrect: boolean;
  isSelected: boolean;
};
