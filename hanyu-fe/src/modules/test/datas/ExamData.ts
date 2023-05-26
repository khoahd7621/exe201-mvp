import { Exam } from "../models";

import img1 from "~/assets/images/modules/test/banner/HSK_01.png";
import img2 from "~/assets/images/modules/test/banner/HSK_02.png";
import img3 from "~/assets/images/modules/test/banner/HSK_03.png";
import img4 from "~/assets/images/modules/test/banner/HSK_04.png";
import img5 from "~/assets/images/modules/test/banner/HSK_05.png";
import img6 from "~/assets/images/modules/test/banner/HSK_06.png";

export const ListExams: Exam[] = [
  {
    id: 1,
    slug: "hsk-1",
    name: "HSK 1",
    imageUrl: img1,
    totalTest: 1,
    structure: [
      {
        name: "Reading",
        hanyu: "听力",
        totalTime: 18,
        totalPart: 4,
        parts: [
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
        ],
      },
      {
        name: "Listening",
        hanyu: "阅读",
        totalTime: 17,
        totalPart: 4,
        parts: [
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "HSK 2",
    slug: "hsk-2",
    imageUrl: img2,
    totalTest: 1,
    structure: [
      {
        name: "Reading",
        hanyu: "听力",
        totalTime: 28,
        totalPart: 5,
        parts: [
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
        ],
      },
      {
        name: "Listening",
        hanyu: "阅读",
        totalTime: 22,
        totalPart: 4,
        parts: [
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "HSK 3",
    slug: "hsk-3",
    imageUrl: img3,
    totalTest: 1,
    structure: [
      {
        name: "Reading",
        hanyu: "听力",
        totalTime: 40,
        totalPart: 5,
        parts: [
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
        ],
      },
      {
        name: "Listening",
        hanyu: "阅读",
        totalTime: 30,
        totalPart: 5,
        parts: [
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
        ],
      },
      {
        name: "Writing",
        hanyu: "书写",
        totalTime: 15,
        totalPart: 2,
        parts: [
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "HSK 4",
    slug: "hsk-4",
    imageUrl: img4,
    totalTest: 1,
    structure: [
      {
        name: "Reading",
        hanyu: "听力",
        totalTime: 35,
        totalPart: 4,
        parts: [
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 15,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
        ],
      },
      {
        name: "Listening",
        hanyu: "阅读",
        totalTime: 40,
        totalPart: 5,
        parts: [
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 14,
            question: [],
          },
          {
            totalQuestion: 6,
            question: [],
          },
        ],
      },
      {
        name: "Writing",
        hanyu: "书写",
        totalTime: 25,
        totalPart: 2,
        parts: [
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "HSK 5",
    slug: "hsk-5",
    imageUrl: img5,
    totalTest: 1,
    structure: [
      {
        name: "Reading",
        hanyu: "听力",
        totalTime: 35,
        totalPart: 8,
        parts: [
          {
            totalQuestion: 20,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 2,
            question: [],
          },
          {
            totalQuestion: 3,
            question: [],
          },
          {
            totalQuestion: 3,
            question: [],
          },
          {
            totalQuestion: 3,
            question: [],
          },
          {
            totalQuestion: 2,
            question: [],
          },
          {
            totalQuestion: 2,
            question: [],
          },
        ],
      },
      {
        name: "Listening",
        hanyu: "阅读",
        totalTime: 45,
        totalPart: 6,
        parts: [
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 20,
            question: [],
          },
          {
            totalQuestion: 3,
            question: [],
          },
          {
            totalQuestion: 4,
            question: [],
          },
          {
            totalQuestion: 4,
            question: [],
          },
          {
            totalQuestion: 4,
            question: [],
          },
        ],
      },
      {
        name: "Writing",
        hanyu: "书写",
        totalTime: 40,
        totalPart: 3,
        parts: [
          {
            totalQuestion: 8,
            question: [],
          },
          {
            totalQuestion: 1,
            question: [],
          },
          {
            totalQuestion: 1,
            question: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "HSK 6",
    slug: "hsk-6",
    imageUrl: img6,
    totalTest: 1,
    structure: [
      {
        name: "Reading",
        hanyu: "听力",
        totalTime: 40,
        totalPart: 10,
        parts: [
          {
            totalQuestion: 15,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 3,
            question: [],
          },
          {
            totalQuestion: 3,
            question: [],
          },
          {
            totalQuestion: 3,
            question: [],
          },
          {
            totalQuestion: 4,
            question: [],
          },
          {
            totalQuestion: 4,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 5,
            question: [],
          },
          {
            totalQuestion: 20,
            question: [],
          },
        ],
      },
      {
        name: "Listening",
        hanyu: "阅读",
        totalTime: 50,
        totalPart: 4,
        parts: [
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 10,
            question: [],
          },
          {
            totalQuestion: 20,
            question: [],
          },
        ],
      },
      {
        name: "Writing",
        hanyu: "书写",
        totalTime: 45,
        totalPart: 1,
        parts: [
          {
            totalQuestion: 1,
            question: [],
          },
        ],
      },
    ],
  },
];
