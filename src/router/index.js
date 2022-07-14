import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AdminPanelView from "../views/AdminPanelView.vue";
import AddStoneView from "../views/AddStoneView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPanelView,
    },
    {
      path: "/addStone",
      name: "addStone",
      component: AddStoneView,
    },
    {
      path: "/stone/:id",
      name: "StoneDetailsView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/StoneDetailsView.vue"),
    },
  ],
});

export default router;
