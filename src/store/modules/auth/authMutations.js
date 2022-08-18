import * as authTypes from "./authTypes.js";
import { USER_TOKEN } from "@/constants/commonConstants";
import router from "@/router/index";

export default {
  [authTypes.AUTH_SUCCESS](state, payload) {
    state.token = payload.token;
    localStorage.setItem(USER_TOKEN, payload.token);
    router.push({ name: "Root" });
  },
  [authTypes.AUTH_LOGOUT](state) {
    state.token = "";
    localStorage.removeItem(USER_TOKEN);
    router.push({ name: "LoginPage" });
  },
};
