import { AUTH_LOGIN, AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/auth";
import router from "@/router/index";
import AuthService from "@/services/AuthService";
import NotificationsService from "@/services/NotificationsService";
import { USER_TOKEN } from "@/constants/commonConstants";

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem(USER_TOKEN) || "",
  },
  getters: {
    isAuth: (state) => {
      try {
        return !!state.token;
      } catch (e) {
        // throws InvalidTokenError exception
        state.token = "";
        localStorage.removeItem(USER_TOKEN);
        return false;
      }
    },
  },
  mutations: {
    [AUTH_SUCCESS](state, payload) {
      state.token = payload.token;
      localStorage.setItem(USER_TOKEN, payload.token);
      router.push({ name: "Root" });
    },
    [AUTH_LOGOUT](state) {
      state.token = "";
      localStorage.removeItem(USER_TOKEN);
      router.push({ name: "LoginPage" });
    },
  },
  actions: {
    [AUTH_LOGIN]({ commit }, formData) {
      AuthService.login(formData)
        .then((response) => response.data.data)
        .then((data) => {
          commit(AUTH_SUCCESS, data);
        })
        .catch((error) => {
          commit(AUTH_LOGOUT);
          NotificationsService.requestErrorNotification(error);
        });
    },
  },
};
