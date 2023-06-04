import AxiosClient from "~/config/AxiosClient";

import { RegisterForm } from "../models";

const authApi = {
  register: (payload: RegisterForm) => {
    return AxiosClient.post("/users/register", payload);
  },
};

export default authApi;
