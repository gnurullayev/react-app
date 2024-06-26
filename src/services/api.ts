import { dispatch, getState } from "@/redux";
import { message } from "antd";
import Axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000";

export const axiosInstance = Axios.create({
  baseURL: BASE_URL + "/api/v1/",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// run before each request
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getState().auth.token;

    if (!config.headers.Authorization) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },

  (error) => Promise.reject(error)
);

// run after each response
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    // if unauthenticated error, reset persisted data and log out the user
    if (status === 401) {
      message.error(error?.message);

      setTimeout(() => {
        dispatch.auth.logoutAsync();
      }, 3000);
      return error;
    }
    return Promise.reject(error);
  }
);

export const API = {
  //Auth
  registration: (data: any) =>
    axiosInstance.post("auth/registration", data).then((res) => res.data.data),
  login: (data: any) =>
    axiosInstance.post("auth/login", data).then((res) => res.data.data),
  logOut: () => axiosInstance.post("auth/logout").then((res) => res.data.data),

  documents: () => axiosInstance.get("documents").then((res) => res.data.data),
  singleDocuments: (documentId: number) =>
    axiosInstance.get(`document/${documentId}`).then((res) => res.data.data),
  documentsCreate: (data: any) =>
    axiosInstance.post("document/create", data).then((res) => res.data),
};
