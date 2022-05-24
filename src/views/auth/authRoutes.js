// import { ifNotAuthenticated } from "@/helpers/routerHelpers";

const authRoutes = [
  {
    path: "/auth/signup",
    name: "SignUpPage",
    component: () =>
      import(/*webpackChunkName: "SignUpPage" */ "@/views/auth/SignUpPage.vue"),
    meta: { layout: "auth" },
    // beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/auth/login",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "LoginPage" */ "@/views/auth/LoginPage.vue"),
    meta: { layout: "auth" },
    // beforeEnter: ifNotAuthenticated,
  },
];

export default authRoutes;
