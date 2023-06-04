import AxiosClient from "~/config/AxiosClient";

import { LoginForm, RegisterForm } from "../models";

const authApi = {
  register: (payload: RegisterForm) => {
    return AxiosClient.post("/users/register", payload);
  },
  login: (payload: LoginForm) => {
    return AxiosClient.post("/auth/login", payload);
  },
};

export default authApi;
