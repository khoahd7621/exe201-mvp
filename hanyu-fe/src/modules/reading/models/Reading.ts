import { Topic } from ".";

export type Reading = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  createdAt: string;
  readMinutes: number;
  topic: Topic;
  level: string;
  relatedReadingIds: number[];
};
