import AxiosClient from "~/config/AxiosClient";
import { Rating, RatingPayload } from "../models";

const ratingApi = {
  create: (data: RatingPayload): Promise<void> => AxiosClient.post("/ratings", data),
  fetchMyRating: (): Promise<Rating> => AxiosClient.get("/ratings/my-rating"),
};

export default ratingApi;
