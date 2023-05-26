import { Exam } from "../models";

import img1 from "~/assets/images/modules/test/banner/HSK_01.png";
import img2 from "~/assets/images/modules/test/banner/HSK_02.png";
import img3 from "~/assets/images/modules/test/banner/HSK_03.png";
import img4 from "~/assets/images/modules/test/banner/HSK_04.png";
import img5 from "~/assets/images/modules/test/banner/HSK_05.png";
import img6 from "~/assets/images/modules/test/banner/HSK_06.png";
import {
  ExamStructures1,
  ExamStructures10,
  ExamStructures11,
  ExamStructures12,
  ExamStructures13,
  ExamStructures14,
  ExamStructures15,
  ExamStructures16,
  ExamStructures2,
  ExamStructures3,
  ExamStructures4,
  ExamStructures5,
  ExamStructures6,
  ExamStructures7,
  ExamStructures8,
  ExamStructures9,
} from "./ExamStructureData";

export const ListExams: Exam[] = [
  {
    id: 1,
    slug: "hsk-1",
    name: "HSK 1",
    imageUrl: img1,
    totalTest: 1,
    structures: [ExamStructures1, ExamStructures2],
  },
  {
    id: 2,
    name: "HSK 2",
    slug: "hsk-2",
    imageUrl: img2,
    totalTest: 1,
    structures: [ExamStructures3, ExamStructures4],
  },
  {
    id: 3,
    name: "HSK 3",
    slug: "hsk-3",
    imageUrl: img3,
    totalTest: 1,
    structures: [ExamStructures5, ExamStructures6, ExamStructures15],
  },
  {
    id: 4,
    name: "HSK 4",
    slug: "hsk-4",
    imageUrl: img4,
    totalTest: 1,
    structures: [ExamStructures7, ExamStructures8, ExamStructures16],
  },
  {
    id: 5,
    name: "HSK 5",
    slug: "hsk-5",
    imageUrl: img5,
    totalTest: 1,
    structures: [ExamStructures9, ExamStructures10, ExamStructures11],
  },
  {
    id: 6,
    name: "HSK 6",
    slug: "hsk-6",
    imageUrl: img6,
    totalTest: 1,
    structures: [ExamStructures12, ExamStructures13, ExamStructures14],
  },
];
