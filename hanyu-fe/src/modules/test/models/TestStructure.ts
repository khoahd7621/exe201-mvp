export type TestStructure = TestDetail[];

export type TestDetail = {
  name: string;
  hanyu: string;
  totalTime: number;
  totalPart: number;
  parts: TestPart[];
};

export type TestPart = {
  totalQuestion: number;
  question: string[];
};
