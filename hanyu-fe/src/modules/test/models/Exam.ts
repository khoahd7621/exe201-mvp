import { ExamStructure } from "./ExamStructure";

export type Exam = {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  structures: ExamStructure[];
  totalTest: number;
};
