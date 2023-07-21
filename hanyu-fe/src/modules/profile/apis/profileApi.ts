import AxiosClient from "~/config/AxiosClient";
import { PasswordPayload, User } from "../models";

const profileApi = {
  fetch: (): Promise<User> => AxiosClient.get("/users/profile"),
  changePassword: (data: PasswordPayload): Promise<void> => AxiosClient.put("/password", data),
};

export default profileApi;
