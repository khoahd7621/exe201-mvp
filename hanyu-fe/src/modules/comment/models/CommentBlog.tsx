export type CommentBlog = {
    id: string;
    title: string;
    content: string;
    likeNumber: number;
    answerNumber: number;
    userId: string;
    memberType: string;
    userLifeInfo: {
      name : string;
      userId: string;
      shortDescription: string;
      avatar: string;
    };
    topic: string;
    createdAt: Date;
  };
  