import { ExamPart } from "./ExamPart";

export type ExamStructure = {
  id: number;
  name: string;
  hanyu: string;
  totalTime: number;
  totalPart: number;
  parts: ExamPart[];
};
