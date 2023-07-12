import { Kanji } from "./Kanji";

export type Example = {
  id: number;
  word: string;
  pinyin: string;
  meaning: string;
  audios: string[];
};

export type Definition = {
  id: number;
  meaning: string;
  meanExplan: string;
  examples: Example[];
};

export type Word = {
  id: number;
  word: string;
  audios: string[];
  pinyins: string[];
  level: string;
  wordType: string;
  definitions: Definition[];
  kanjis: Kanji[];
};
