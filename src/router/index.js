import { createRouter, createWebHistory } from "vue-router";
import RootView from "@/views/RootView.vue";
import authRoutes from "@/views/auth/authRoutes";

const routes = [
  ...authRoutes,
  {
    path: "/",
    name: "Root",
    component: RootView,
  },
  // Page for 404 error
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "@/views/404.vue"),
    meta: {
      layout: "main",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
