import AxiosClient from "~/config/AxiosClient";

const profileApi = {
  fetch: () => AxiosClient.get("/users/profile"),
};

export default profileApi;
