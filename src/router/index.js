import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landingpage.index",
    component: () => import("../views/landingpage/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
