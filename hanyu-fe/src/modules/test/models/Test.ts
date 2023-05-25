import img1 from "~/assets/images/modules/test/banner/HSK_01.png";
import img2 from "~/assets/images/modules/test/banner/HSK_02.png";
import img3 from "~/assets/images/modules/test/banner/HSK_03.png";
import img4 from "~/assets/images/modules/test/banner/HSK_04.png";
import img5 from "~/assets/images/modules/test/banner/HSK_05.png";
import img6 from "~/assets/images/modules/test/banner/HSK_06.png";

export type Test = {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
};

export const ListTests: Test[] = [
  {
    id: 1,
    slug: "hsk-1",
    name: "HSK 1",
    imageUrl: img1,
  },
  {
    id: 2,
    name: "HSK 2",
    slug: "hsk-2",
    imageUrl: img2,
  },
  {
    id: 3,
    name: "HSK 3",
    slug: "hsk-3",
    imageUrl: img3,
  },
  {
    id: 4,
    name: "HSK 4",
    slug: "hsk-4",
    imageUrl: img4,
  },
  {
    id: 5,
    name: "HSK 5",
    slug: "hsk-5",
    imageUrl: img5,
  },
  {
    id: 6,
    name: "HSK 6",
    slug: "hsk-6",
    imageUrl: img6,
  },
];
