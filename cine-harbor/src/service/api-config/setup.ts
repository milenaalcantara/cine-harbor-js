//import HandleError from "@/utils/handle-errors.util";
//import { getTokenFromStorage } from "@/utils/user-store.util";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

//const handleError: HandleError = new HandleError();

function apiConfig(baseUrl: string): AxiosRequestConfig {
  return {
    baseURL: baseUrl,
  };
}

function initAxios(config: AxiosRequestConfig, token?: any): AxiosInstance {
  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    (request: AxiosRequestConfig) => {
      //request.headers!.Authorization = token ?? (getTokenFromStorage() as any);
      request.headers!.Authorization = token??`Bearer ${process.env.TOKEN}`
      return request;
    },
    (error) => Promise.reject(error)
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
     // handleError.getErrors(error);
      return Promise.reject(error);
    }
  );

  return defineInstance;
}

function api(baseURL: string = "/baseApi", token?: any) {
  return initAxios(apiConfig(baseURL), token);
}

export { api };
