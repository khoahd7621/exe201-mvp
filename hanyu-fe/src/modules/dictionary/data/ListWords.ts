import { Word } from "../models/Word";

import animation1 from "~/assets/animation/dictionary/animate-1.svg";

const ListWords: Word[] = [
  {
    id: 1,
    word: "好",
    audios: ["", ""],
    pinyins: ["hǎo", "ㄏㄠˇ", "HẢO | HIẾU"],
    level: "HSK mới: 1, 2, 4; HSK: 1; TOCFL: 4;",
    wordType: "Danh từ, Động từ, Tính từ, Trạng từ, Liên Từ, Tiểu/Trợ từ",
    definitions: [
      {
        id: 1,
        meaning: "tốt; lành; hay",
        meanExplan: '优点多的;使人满意的(跟"坏"相对)【優點多的;使人滿意的(跟"壞"相對)】',
        examples: [
          {
            id: 1,
            word: "好人",
            pinyin: "hǎorén",
            meaning: "người tốt",
            audios: ["", ""],
          },
          {
            id: 2,
            word: "好东西【好東西】",
            pinyin: "hǎo dōngxī",
            meaning: "hàng tốt",
            audios: ["", ""],
          },
        ],
      },
      {
        id: 2,
        meaning: "đẹp; ngon; tốt (dùng trước động từ, biểu thị sự thoả mãn ở một mặt nào đó)",
        meanExplan:
          "用在动词前，表示使人满意的性质在哪方面【用在動詞前，表示使人滿意的性質在哪方面】",
        examples: [
          {
            id: 1,
            word: "好看",
            pinyin: "hǎokàn",
            meaning: "đẹp, coi được",
            audios: ["", ""],
          },
        ],
      },
    ],
    kanjis: [
      {
        id: 1,
        character: "好",
        animation: animation1,
        pinyin: "hǎo, hào",
        set: "nữ 女",
        record: "hội ý",
        noOfStrokes: 6,
        penStroke: "フノ一フ丨一",
      },
    ],
  },
];

export default ListWords;
