import axios from "axios";
import store from "@/store/index.js";
import router from "@/router/index.js";
import { USER_TOKEN } from "@/constants/commonConstants";

const token = localStorage.getItem(USER_TOKEN);

// Default config for axios instance
const axiosParams = {
  baseURL: process.env.VUE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${token || ""}`,
    Accept: "application/json",
  },
  // responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // browser only: 'blob'
  responseType: "json", // default

  // responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: "utf8", // default,
  withCredentials: true,
};

// Create axios instance
const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      store.commit("auth/AUTH_LOGOUT");
      // Delete info about current logged in user
      // store.commit("user/SET_USER_INFO", {});
    }

    if (error.response && error.response.status === 404) {
      router.push({ name: "NotFound" });
    }

    return Promise.reject(error);
  }
);

// Main api function
const api = (axios) => {
  // Wrapper functions around axios
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance);
