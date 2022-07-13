import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import AdminPanelView from "../views/AdminPanelView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
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
            path: "/stone/:id",
            name: "StoneDetailsView",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/StoneDetailsView.vue"),
        },
        {
            path: "/addStone",
            name: "AddStoneView",
            component: () => import("../views/AddStoneView.vue"),
        },
    ],
});

export default router;
