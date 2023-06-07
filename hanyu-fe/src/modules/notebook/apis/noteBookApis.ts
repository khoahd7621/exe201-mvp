import AxiosClient from "~/config/AxiosClient";
import { WordNote } from "../models";

const noteBookApi = {
  getListWordNotes: (): Promise<WordNote[]> => AxiosClient.get("/user/word-notes"),
  addWordNote: (note: string, wordId: number): Promise<void> =>
    AxiosClient.put("/user/word-notes", {
      note,
      wordId,
    }),
};

export default noteBookApi;
