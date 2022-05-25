import api from "@/api/api.js";

const URLS = {
  login: "/login",
  signup: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/send-reset-password",
};

export default {
  login(payload) {
    return api.post(URLS.login, payload);
  },
  signup(payload) {
    return api.post(URLS.signup, payload);
  },
  forgotPassword(payload) {
    return api.post(URLS.forgotPassword, payload);
  },
  resetPassword(payload) {
    return api.post(URLS.resetPassword, payload);
  },
};
