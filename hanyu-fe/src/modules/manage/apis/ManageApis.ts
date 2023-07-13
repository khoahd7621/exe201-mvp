import AxiosClient from "~/config/AxiosClient";
import { User } from "../models/User";

const manageApis = {
  getUsers: (pageSize: number, pageNum: number): Promise<User[]> => {
    return AxiosClient.get(`admin/users/profiles?pageSize=${pageSize}&pageNum=${pageNum}`);
  },
  expandSubcription: (userId: string, packageTime: string): Promise<void> => {
    return AxiosClient.put("admin/users/upgrade", {
      userId,
      packageTime,
    });
  },
};

export default manageApis;
