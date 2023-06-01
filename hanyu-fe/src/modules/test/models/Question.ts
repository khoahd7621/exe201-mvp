export type Question = {
  id: number;
  testId: number;
  structureId: number;
  answer: string;
  options: string[];
  type: number;
  question?: string;
  description?: string;
  imageUrl?: string;
  audioUrl?: string;
};
