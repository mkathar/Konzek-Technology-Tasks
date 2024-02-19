import { createWebHistory, createRouter } from "vue-router";
import mainPage from "../views/mainPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: mainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
