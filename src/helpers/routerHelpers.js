import store from "@/store/index.js";

export const ifAuthenticated = (_to, _from, next) => {
  if (store.getters["auth/isAuth"]) {
    next();
    return;
  }
  // Redirect to Login page, if user not authorised
  next("/auth/login");
};

export const ifNotAuthenticated = (_to, _from, next) => {
  if (!store.getters["auth/isAuth"]) {
    next();
    return;
  }

  next("/");
};
