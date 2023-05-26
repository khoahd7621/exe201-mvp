export type ExamStructure = ExamDetail[];

export type ExamDetail = {
  name: string;
  hanyu: string;
  totalTime: number;
  totalPart: number;
  parts: ExamPart[];
};

export type ExamPart = {
  totalQuestion: number;
  question: string[];
};
