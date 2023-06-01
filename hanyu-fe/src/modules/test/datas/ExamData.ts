import { Exam } from "../models";

import img1 from "~/assets/images/modules/test/banner/HSK_01.png";
import img2 from "~/assets/images/modules/test/banner/HSK_02.png";
import img3 from "~/assets/images/modules/test/banner/HSK_03.png";
import img4 from "~/assets/images/modules/test/banner/HSK_04.png";
import img5 from "~/assets/images/modules/test/banner/HSK_05.png";
import img6 from "~/assets/images/modules/test/banner/HSK_06.png";
import { ListeningStructure, ReadingStructure, WritingStructure } from "./ExamStructureData";

export const ListExams: Exam[] = [
  {
    id: 1,
    slug: "hsk-1",
    name: "HSK 1",
    imageUrl: img1,
    totalTest: 4,
    structures: [
      { ...ListeningStructure, totalTime: 18, totalQuestion: 20 },
      { ...ReadingStructure, totalTime: 17, totalQuestion: 10 },
    ],
  },
  {
    id: 2,
    name: "HSK 2",
    slug: "hsk-2",
    imageUrl: img2,
    totalTest: 4,
    structures: [
      { ...ListeningStructure, totalTime: 28, totalQuestion: 10 },
      { ...ReadingStructure, totalTime: 22, totalQuestion: 10 },
    ],
  },
  {
    id: 3,
    name: "HSK 3",
    slug: "hsk-3",
    imageUrl: img3,
    totalTest: 4,
    structures: [
      { ...ListeningStructure, totalTime: 40, totalQuestion: 10 },
      { ...ReadingStructure, totalTime: 30, totalQuestion: 10 },
      { ...WritingStructure, totalTime: 15, totalQuestion: 10 },
    ],
  },
  {
    id: 4,
    name: "HSK 4",
    slug: "hsk-4",
    imageUrl: img4,
    totalTest: 4,
    structures: [
      { ...ListeningStructure, totalTime: 35, totalQuestion: 10 },
      { ...ReadingStructure, totalTime: 40, totalQuestion: 10 },
      { ...WritingStructure, totalTime: 25, totalQuestion: 10 },
    ],
  },
  {
    id: 5,
    name: "HSK 5",
    slug: "hsk-5",
    imageUrl: img5,
    totalTest: 4,
    structures: [
      { ...ListeningStructure, totalTime: 35, totalQuestion: 10 },
      { ...ReadingStructure, totalTime: 45, totalQuestion: 10 },
      { ...WritingStructure, totalTime: 40, totalQuestion: 10 },
    ],
  },
  {
    id: 6,
    name: "HSK 6",
    slug: "hsk-6",
    imageUrl: img6,
    totalTest: 4,
    structures: [
      { ...ListeningStructure, totalTime: 40, totalQuestion: 10 },
      { ...ReadingStructure, totalTime: 50, totalQuestion: 10 },
      { ...WritingStructure, totalTime: 45, totalQuestion: 1 },
    ],
  },
];
