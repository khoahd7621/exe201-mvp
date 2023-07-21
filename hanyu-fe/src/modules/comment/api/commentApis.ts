import AxiosClient from "~/config/AxiosClient";
import { CommentBlog } from "../models";

const commentApis = {
  getListComments: (): Promise<CommentBlog[]> =>
    AxiosClient.get("/public/comments?pageSize=20&pageNumber=1"),
  addComment: (title: string, content: string, topic: string): Promise<void> =>
    AxiosClient.post(`/comments`, {
      title,
      content,
      topic,
    }),
};

export default commentApis;
