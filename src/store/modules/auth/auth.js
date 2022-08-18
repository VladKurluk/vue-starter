import { USER_TOKEN } from "@/constants/commonConstants";
import actions from "./authActions";
import mutations from "./authMutations";

const state = {
  token: localStorage.getItem(USER_TOKEN) || "",
};

export default {
  namespaced: true,
  state,
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
  actions,
  mutations,
};
