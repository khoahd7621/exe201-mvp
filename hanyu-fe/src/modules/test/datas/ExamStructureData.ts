import { ExamStructure } from "../models";
import {
  ExamPart1,
  ExamPart10,
  ExamPart14,
  ExamPart15,
  ExamPart2,
  ExamPart20,
  ExamPart3,
  ExamPart4,
  ExamPart5_1,
  ExamPart5_2,
  ExamPart5_3,
  ExamPart5_4,
  ExamPart5_5,
  ExamPart5_6,
  ExamPart5_7,
  ExamPart5_8,
  ExamPart6,
  ExamPart8,
} from "./ExamPartData";

export const ExamStructures1: ExamStructure = {
  id: 1,
  name: "Listening",
  hanyu: "听力",
  totalTime: 18,
  totalPart: 4,
  parts: [ExamPart5_1, ExamPart5_2, ExamPart5_3, ExamPart5_4],
};

export const ExamStructures2: ExamStructure = {
  id: 2,
  name: "Reading",
  hanyu: "阅读",
  totalTime: 17,
  totalPart: 4,
  parts: [ExamPart5_5, ExamPart5_6, ExamPart5_7, ExamPart5_8],
};

export const ExamStructures3: ExamStructure = {
  id: 3,
  name: "Listening",
  hanyu: "听力",
  totalTime: 28,
  totalPart: 5,
  parts: [ExamPart10, ExamPart10, ExamPart5_1, ExamPart5_1, ExamPart5_1],
};

export const ExamStructures4: ExamStructure = {
  id: 4,
  name: "Reading",
  hanyu: "阅读",
  totalTime: 22,
  totalPart: 4,
  parts: [ExamPart5_1, ExamPart5_1, ExamPart5_1, ExamPart10],
};

export const ExamStructures5: ExamStructure = {
  id: 5,
  name: "Listening",
  hanyu: "听力",
  totalTime: 40,
  totalPart: 5,
  parts: [ExamPart10, ExamPart10, ExamPart10, ExamPart5_1, ExamPart5_1],
};

export const ExamStructures6: ExamStructure = {
  id: 6,
  name: "Reading",
  hanyu: "阅读",
  totalTime: 30,
  totalPart: 5,
  parts: [ExamPart10, ExamPart5_1, ExamPart5_1, ExamPart5_1, ExamPart5_1],
};

export const ExamStructures7: ExamStructure = {
  id: 7,
  name: "Listening",
  hanyu: "听力",
  totalTime: 35,
  totalPart: 4,
  parts: [ExamPart10, ExamPart15, ExamPart10, ExamPart10],
};

export const ExamStructures8: ExamStructure = {
  id: 8,
  name: "Reading",
  hanyu: "阅读",
  totalTime: 40,
  totalPart: 5,
  parts: [ExamPart5_1, ExamPart5_1, ExamPart10, ExamPart14, ExamPart6],
};

export const ExamStructures9: ExamStructure = {
  id: 9,
  name: "Listening",
  hanyu: "听力",
  totalTime: 35,
  totalPart: 8,
  parts: [ExamPart20, ExamPart10, ExamPart2, ExamPart3, ExamPart3, ExamPart3, ExamPart2, ExamPart2],
};

export const ExamStructures10: ExamStructure = {
  id: 10,
  name: "Reading",
  hanyu: "阅读",
  totalTime: 45,
  totalPart: 6,
  parts: [ExamPart10, ExamPart20, ExamPart3, ExamPart4, ExamPart4, ExamPart4],
};

export const ExamStructures11: ExamStructure = {
  id: 11,
  name: "Writing",
  hanyu: "书写",
  totalTime: 40,
  totalPart: 3,
  parts: [ExamPart8, ExamPart1, ExamPart1],
};

export const ExamStructures12: ExamStructure = {
  id: 12,
  name: "Listening",
  hanyu: "听力",
  totalTime: 40,
  totalPart: 10,
  parts: [
    ExamPart15,
    ExamPart10,
    ExamPart3,
    ExamPart3,
    ExamPart3,
    ExamPart4,
    ExamPart4,
    ExamPart5_1,
    ExamPart5_1,
    ExamPart5_1,
    ExamPart20,
  ],
};

export const ExamStructures13: ExamStructure = {
  id: 13,
  name: "Reading",
  hanyu: "阅读",
  totalTime: 50,
  totalPart: 4,
  parts: [ExamPart10, ExamPart10, ExamPart10, ExamPart20],
};

export const ExamStructures14: ExamStructure = {
  id: 14,
  name: "Writing",
  hanyu: "书写",
  totalTime: 45,
  totalPart: 1,
  parts: [ExamPart1],
};

export const ExamStructures15: ExamStructure = {
  id: 15,
  name: "Writing",
  hanyu: "书写",
  totalTime: 15,
  totalPart: 2,
  parts: [ExamPart5_1, ExamPart5_1],
};

export const ExamStructures16: ExamStructure = {
  id: 16,
  name: "Writing",
  hanyu: "书写",
  totalTime: 25,
  totalPart: 2,
  parts: [ExamPart10, ExamPart5_1],
};
