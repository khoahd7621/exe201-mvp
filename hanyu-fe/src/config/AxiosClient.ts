import axios from "axios";

import { store } from "~/redux/store";

// Set config defaults when creating the instance
const AxiosClient = axios.create({
  baseURL: "https://hnbe.online/hanyu-be/api",
});

// Add a request interceptor
AxiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = store.getState().auth.accessToken;
    if (accessToken !== "") {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default AxiosClient;
