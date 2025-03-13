import "server-only";

import { handleError } from "@/utils/errorUtils";
import { notification } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_PUBLIC_BASE_API_URL}/api`,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const isInAuth = window.location.pathname.split("/")[1] === "login";
    const status = error.response?.status;
    const responseCode = error?.response?.data?.responseCode;

    if (status === 401 && !isInAuth) {
      notification.success({
        message: "Session หมดอายุ เข้าสู่ระบบใหม่อีกครั้ง",
      });
      window.location.href = "/login";
    } else if (status === 404) {
      notification.error({
        message: "Resource not found",
        description: "The requested resource could not be found.",
      });
    } else if (status === 429) {
      notification.error({
        message: "Too Many Request",
        description: "ไม่สามารถทำรายการได้ กรุณารอ 1 นาที",
      });
    } else if (status === 500) {
      notification.error({
        message: "Server error",
        description:
          "An internal server error occurred. Please try again later.",
      });
    } else if (!isInAuth) {
      notification.error({
        message:
          (responseCode && "ไม่สามารถทำรายการได้") || "An error occurred",
        description:
          handleError(responseCode) ||
          error.message ||
          "Please try again later.",
      });
      return Promise.resolve(error?.response);
    }
    return Promise.reject(new Error("Handled error: " + error.message));
  }
);

export const post = <T>(url: string, body: object | string) =>
  instance.post<T>(url, body, { withCredentials: true });

export const deleteRequest = (url: string) =>
  instance.delete(url, { withCredentials: true });

export const put = (url: string, body: object | string) =>
  instance.put(url, body, { withCredentials: true });

export const patch = (url: string, body: object | string) =>
  instance.patch(url, body, { withCredentials: true });

export const get = <ResponseType>(url: string, params?: object) =>
  instance.get<ResponseType>(url, {
    params,
    withCredentials: true,
  });

export const download = <ResponseType>(url: string, params?: object) =>
  instance.get<ResponseType>(url, {
    params,
    withCredentials: true,
    responseType: "arraybuffer",
  });

export const postForm = (url: string, body: object | string) =>
  instance.post(url, body, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });

export const putForm = (url: string, body: object | string) =>
  instance.put(url, body, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
  });

export const patchForm = (url: string, body: object | string) =>
  instance.patchForm(url, body, { withCredentials: true });

export const deletes = (url: string) =>
  instance.delete(url, {
    withCredentials: true,
  });
