import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "home_1",
    component: HomeView,
  },

  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/materijali",
    name: "materijali",
    component: () => import("../views/Materijali.vue"),
  },
  {
    path: "/jagoda",
    name: "jagoda",
    component: () => import("../views/JagodaPattern.vue"),
  },
  {
    path: "/radovi",
    name: "radovi",
    component: () => import("../views/OstaliRadovi.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
  {
    path: "/pdf",
    name: "pdf",
    component: () => import("../views/PDF.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
