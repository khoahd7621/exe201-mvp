export type Question = {
  id: number;
  testId: number;
  partId: number;
  structureId: number;
  question?: string;
  answer: string;
  options: string[];
  description?: string;
  imageUrl?: string;
  audioUrl?: string;
};
