import * as authTypes from "./authTypes.js";
import AuthService from "@/services/AuthService";
import NotificationsService from "@/services/NotificationsService";

export default {
  [authTypes.AUTH_LOGIN]({ commit }, formData) {
    AuthService.login(formData)
      .then((response) => response.data.data)
      .then((data) => {
        commit(authTypes.AUTH_SUCCESS, data);
      })
      .catch((error) => {
        commit(authTypes.AUTH_LOGOUT);
        NotificationsService.requestErrorNotification(error);
      });
  },
};
