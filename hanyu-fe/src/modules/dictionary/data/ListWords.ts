import { Word } from "../models/Word";

import audio1 from "~/assets/audios/dictionary/1.mp3";
import audio2 from "~/assets/audios/dictionary/2.mp3";
import audio3 from "~/assets/audios/dictionary/3.mp3";
import audio4 from "~/assets/audios/dictionary/4.mp3";
import audio5 from "~/assets/audios/dictionary/5.mp3";
import audio6 from "~/assets/audios/dictionary/6.mp3";
import audio7 from "~/assets/audios/dictionary/7.mp3";
import audio8 from "~/assets/audios/dictionary/8.mp3";
import audio9 from "~/assets/audios/dictionary/9.mp3";
import audio10 from "~/assets/audios/dictionary/10.mp3";
import audio11 from "~/assets/audios/dictionary/11.mp3";
import audio12 from "~/assets/audios/dictionary/12.mp3";
import audio13 from "~/assets/audios/dictionary/13.mp3";
import audio14 from "~/assets/audios/dictionary/14.mp3";
import audio15 from "~/assets/audios/dictionary/15.mp3";
import audio16 from "~/assets/audios/dictionary/16.mp3";
import audio17 from "~/assets/audios/dictionary/17.mp3";
import audio18 from "~/assets/audios/dictionary/18.mp3";
import audio19 from "~/assets/audios/dictionary/19.mp3";
import audio20 from "~/assets/audios/dictionary/20.mp3";
import audio21 from "~/assets/audios/dictionary/21.mp3";
import audio22 from "~/assets/audios/dictionary/22.mp3";
import audio23 from "~/assets/audios/dictionary/23.mp3";
import audio24 from "~/assets/audios/dictionary/24.mp3";
import audio25 from "~/assets/audios/dictionary/25.mp3";
import audio26 from "~/assets/audios/dictionary/26.mp3";
import audio27 from "~/assets/audios/dictionary/27.mp3";
import audio28 from "~/assets/audios/dictionary/28.mp3";
import audio29 from "~/assets/audios/dictionary/29.mp3";
import audio30 from "~/assets/audios/dictionary/30.mp3";
import audio31 from "~/assets/audios/dictionary/31.mp3";
import audio32 from "~/assets/audios/dictionary/32.mp3";
import audio33 from "~/assets/audios/dictionary/33.mp3";
import audio34 from "~/assets/audios/dictionary/34.mp3";
import audio35 from "~/assets/audios/dictionary/35.mp3";
import audio36 from "~/assets/audios/dictionary/36.mp3";
import audio37 from "~/assets/audios/dictionary/37.mp3";
import audio38 from "~/assets/audios/dictionary/38.mp3";
import audio39 from "~/assets/audios/dictionary/39.mp3";
import audio40 from "~/assets/audios/dictionary/40.mp3";

import animation1 from "~/assets/animation/dictionary/animate-1.svg";
import animation2 from "~/assets/animation/dictionary/animate-2.svg";
import animation3 from "~/assets/animation/dictionary/animate-3.svg";
import animation4 from "~/assets/animation/dictionary/animate-4.svg";
import animation5 from "~/assets/animation/dictionary/animate-5.svg";
import animation6 from "~/assets/animation/dictionary/animate-6.svg";
import animation7 from "~/assets/animation/dictionary/animate-7.svg";
import animation8 from "~/assets/animation/dictionary/animate-8.svg";
import animation9 from "~/assets/animation/dictionary/animate-9.svg";

const ListWords: Word[] = [
  {
    id: 1,
    word: "好",
    audios: [audio1, audio2],
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
            audios: [audio3, audio4],
          },
          {
            id: 2,
            word: "好东西【好東西】",
            pinyin: "hǎo dōngxī",
            meaning: "hàng tốt",
            audios: [audio5, audio6],
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
            audios: [audio7, audio8],
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
  {
    id: 2,
    word: "好好儿",
    audios: [audio9, audio10],
    pinyins: ["hǎo hāor", "ㄏㄠˇㄏㄠˇㄦ˙", "HẢO HẢO NHI"],
    level: "TOCFL: 3",
    wordType: "Từ trạng thái, Trạng từ",
    definitions: [
      {
        id: 1,
        meaning:
          "tốt lành; êm đẹp; tốt tươi; tốt (dùng trước động từ, biểu đạt ý nghĩa cố gắng, chăm chỉ hoặc tận tình làm một việc nào đó)",
        meanExplan: "形容情况正常;完好【形容情況正常;完好】",
        examples: [
          {
            id: 1,
            word: "那棵百年老树，至今还长得好好儿的。【那棵百年老樹，至今還長得好好兒的。】",
            pinyin: "nà kē bǎinián lǎo shù, zhìjīn hái zhǎng dé hǎo hāor de.",
            meaning: "cây cổ thụ đó sống 100 năm rồi, bây giờ vẫn tốt tươi.",
            audios: [audio11, audio12],
          },
        ],
      },
      {
        id: 2,
        meaning: "cố gắng hết lòng; cố gắng hết sức; dốc sức; thoả thích",
        meanExplan: "尽力地;尽情地;耐心地【盡力地;盡情地;耐心地】",
        examples: [
          {
            id: 1,
            word: "大家再好好儿想一想。【大家再好好兒想一想。】",
            pinyin: "dàjiā zài hǎo hāor xiǎngyīxiǎng。",
            meaning: "mọi người hãy cố gắng nghĩ nữa đi.",
            audios: [audio13, audio14],
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
      {
        id: 2,
        character: "儿",
        animation: animation2,
        pinyin: "ér",
        set: "nhân 儿",
        record: "tượng hình",
        noOfStrokes: 2,
        penStroke: "ノフ",
      },
    ],
  },
  {
    id: 3,
    word: "火",
    audios: [audio15, audio16],
    pinyins: ["huǒ", "ㄏㄨㄛˇ", "HOẢ"],
    level: "HSK mới: 3, 4; HSK: 4; TOCFL: 2;",
    wordType: "Danh từ, Động từ, Tính từ",
    definitions: [
      {
        id: 1,
        meaning: "lửa",
        meanExplan: "(火儿) 物体燃烧时所发的光和焰【(火兒) 物體燃燒時所發的光和焰】",
        examples: [
          {
            id: 1,
            word: "火光",
            pinyin: "huǒguāng",
            meaning: "ánh lửa",
            audios: [audio17, audio18],
          },
        ],
      },
      {
        id: 2,
        meaning: "thuốc súng; thuốc nổ; thuốc pháo",
        meanExplan: "指枪炮弹药【指槍炮彈藥】",
        examples: [
          {
            id: 1,
            word: "火器",
            pinyin: "huǒqì",
            meaning: "súng đạn; vũ khí",
            audios: [audio19, audio20],
          },
        ],
      },
    ],
    kanjis: [
      {
        id: 1,
        character: "火",
        animation: animation3,
        pinyin: "huǒ",
        set: "hoả 火",
        record: "tượng hình",
        noOfStrokes: 4,
        penStroke: "丶ノノ丶",
      },
    ],
  },
  {
    id: 4,
    word: "火急火燎",
    audios: [audio21, audio22],
    pinyins: ["huǒjíhuǒliǎo", "ㄏㄨㄛˇㄐㄧˊㄏㄨㄛˇㄌㄧㄠˇ", "HOẢ CẤP HOẢ LIỆU"],
    level: "TOCFL: 4;",
    wordType: "Động từ",
    definitions: [
      {
        id: 1,
        meaning: "vô cùng lo lắng; lo lắng không yên",
        meanExplan: "形容非常焦急",
        examples: [
          {
            id: 1,
            word: "听说发生了事故，他心里火急火燎的。【聽說發生了事故，他心裡火急火燎的。】",
            pinyin: "tīng shuō fā shēng liǎo shìgù, tā xīnlǐ huǒjíhuǒliǎo de.",
            meaning: "nghe nói xảy ra sự cố, trong lòng anh ấy lo lắng không yên.",
            audios: [audio23, audio24],
          },
        ],
      },
    ],
    kanjis: [
      {
        id: 1,
        character: "火",
        animation: animation3,
        pinyin: "huǒ",
        set: "hoả 火",
        record: "tượng hình",
        noOfStrokes: 4,
        penStroke: "丶ノノ丶",
      },
      {
        id: 2,
        character: "燎",
        animation: animation4,
        pinyin: "liáo, liǎo",
        set: "hoả 火",
        record: "hình thanh",
        noOfStrokes: 16,
        penStroke: "丶ノノ丶一ノ丶丶ノ丨フ一一丨ノ丶",
      },
      {
        id: 3,
        character: "急",
        animation: animation5,
        pinyin: "jí",
        set: "tâm 心",
        record: "hình thanh & hội ý",
        noOfStrokes: 9,
        penStroke: "ノフフ一一丶フ丶丶",
      },
    ],
  },
  {
    id: 5,
    word: "风风火火",
    audios: [audio25, audio26],
    pinyins: ["fēngfēnghuǒhuǒ", "ㄈㄥㄈㄥㄏㄨㄛˇㄏㄨㄛˇ", "PHONG PHONG HOẢ HOẢ"],
    level: "HSK: 5; TOCFL: 3;",
    wordType: "Động từ, Tính từ",
    definitions: [
      {
        id: 1,
        meaning: "hung hăng; hùng hùng hổ hổ",
        meanExplan: "形容急急忙忙、冒冒失失的样子【形容急急忙忙、冒冒失失的樣子】",
        examples: [
          {
            id: 1,
            word: "他风风火火地闯了进来。【他風風火火地闖了進來。】",
            pinyin: "tā fēngfēnghuǒhuǒ de chuǎngle jìnlái.",
            meaning: "nó hùng hùng hổ hổ xông vào.",
            audios: [audio27, audio28],
          },
        ],
      },
      {
        id: 2,
        meaning: "sôi động; hừng hực",
        meanExplan: "形容很活跃、有劲头的样子【形容很活躍、有勁頭的樣子】",
        examples: [
          {
            id: 1,
            word: "风风火火的战斗年代。【風風火火的戰鬥年代。】",
            pinyin: "fēngfēnghuǒhuǒ de zhàndǒu niándài。",
            meaning: "những năm tháng chiến đấu sôi động",
            audios: [audio29, audio30],
          },
        ],
      },
    ],
    kanjis: [
      {
        id: 1,
        character: "火",
        animation: animation3,
        pinyin: "huǒ",
        set: "hoả 火",
        record: "tượng hình",
        noOfStrokes: 4,
        penStroke: "丶ノノ丶",
      },
      {
        id: 2,
        character: "风",
        animation: animation6,
        pinyin: "fēng",
        set: "phong 風",
        record: "hình thanh",
        noOfStrokes: 4,
        penStroke: "ノフノ丶",
      },
    ],
  },
  {
    id: 6,
    word: "烽火",
    audios: [audio31, audio32],
    pinyins: ["fēnghuǒ", "ㄈㄥㄏㄨㄛˇ", "PHONG HOẢ"],
    level: "TOCFL: 4;",
    wordType: "Danh từ, Động từ",
    definitions: [
      {
        id: 1,
        meaning: "chiến tranh",
        meanExplan: "比喻战火或战争【比喻戰火或戰爭】",
        examples: [
          {
            id: 1,
            word: "烽火连天【烽火連天】",
            pinyin: "fēnghuǒliántiān",
            meaning: "năm tháng chiến tranh",
            audios: [audio33, audio34],
          },
        ],
      },
    ],
    kanjis: [
      {
        id: 1,
        character: "烽",
        animation: animation7,
        pinyin: "fēng",
        set: "hoả 火",
        record: "hình thanh",
        noOfStrokes: 11,
        penStroke: "丶ノノ丶ノフ丶一一一丨",
      },
      {
        id: 2,
        character: "火",
        animation: animation3,
        pinyin: "huǒ",
        set: "hoả 火",
        record: "tượng hình",
        noOfStrokes: 4,
        penStroke: "丶ノノ丶",
      },
    ],
  },
  {
    id: 7,
    word: "渔火",
    audios: [audio35, audio36],
    pinyins: ["yúhuǒ", "ㄩˊㄏㄨㄛˇ", "NGƯ HOẢ"],
    level: "TOCFL: 4;",
    wordType: "Danh từ",
    definitions: [
      {
        id: 1,
        meaning: "đèn trên thuyền chài",
        meanExplan: "渔船上的灯火【漁船上的燈火】",
        examples: [
          {
            id: 1,
            word: "入夜，江上渔火点点。【入夜，江上漁火點點。】",
            pinyin: "rùyè，jiāng shàng yúhuǒ diǎndiǎn。",
            meaning: "ban đêm, trên sông đèn trên thuyền chài lấp lánh.",
            audios: [audio37, audio38],
          },
        ],
      },
    ],
    kanjis: [
      {
        id: 1,
        character: "渔",
        animation: animation8,
        pinyin: "yú",
        set: "thuỷ 水",
        record: "hình thanh & hội ý",
        noOfStrokes: 11,
        penStroke: "丶丶一ノフ丨フ一丨一一",
      },
      {
        id: 2,
        character: "火",
        animation: animation3,
        pinyin: "huǒ",
        set: "hoả 火",
        record: "tượng hình",
        noOfStrokes: 4,
        penStroke: "丶ノノ丶",
      },
    ],
  },
  {
    id: 8,
    word: "火烧火燎",
    audios: [audio39, audio40],
    pinyins: ["huǒshāohuǒliǎo", "ㄏㄨㄛˇㄕㄠㄏㄨㄛˇㄌㄧㄠˇ", "HOẢ THIẾU HOẢ LIỆU"],
    level: "TOCFL: 4;",
    wordType: "Trạng từ, Động từ",
    definitions: [
      {
        id: 1,
        meaning: "như thiêu như đốt; như nung như nấu",
        meanExplan:
          "(火烧火燎的) 比喻身上热得难受或心中十分焦灼【(火燒火燎的) 比喻身上熱得難受或心中十分焦灼】",
        examples: [
          {
            id: 1,
            word: "他太太的行为对他的未来和前途造成了可怕的威胁，这使他心里火烧火燎的。】",
            pinyin: "tīng shuō fā shēng liǎo shìgù, tā xīnlǐ huǒjíhuǒliǎo de.",
            meaning: "nghe nói xảy ra sự cố, trong lòng anh ấy lo lắng không yên.",
            audios: [audio23, audio24],
          },
        ],
      },
    ],
    kanjis: [
      {
        id: 1,
        character: "火",
        animation: animation3,
        pinyin: "huǒ",
        set: "hoả 火",
        record: "tượng hình",
        noOfStrokes: 4,
        penStroke: "丶ノノ丶",
      },
      {
        id: 2,
        character: "燎",
        animation: animation4,
        pinyin: "liáo, liǎo",
        set: "hoả 火",
        record: "hình thanh",
        noOfStrokes: 16,
        penStroke: "丶ノノ丶一ノ丶丶ノ丨フ一一丨ノ丶",
      },
      {
        id: 3,
        character: "烧",
        animation: animation9,
        pinyin: "shāo",
        set: "hoả 火",
        record: "hình thanh",
        noOfStrokes: 10,
        penStroke: "丶ノノ丶一フノ一ノフ",
      },
    ],
  },
];

export default ListWords;
