import { User } from "~/modules/profile/models";

export type Rating = {
  createdAt: string;
  description: string;
  id: string;
  star: number;
  updatedAt: string;
  userProfile: User;
};
