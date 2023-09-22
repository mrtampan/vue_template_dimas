import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/login.vue"),
      beforeEnter: guestMiddleware,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../components/componentBE/dashboard/Index.vue"),
      beforeEnter: authMiddleware,
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../components/componentBE/product/index.vue"),
      beforeEnter: authMiddleware,
    },
  ],
});

export default router;
function authMiddleware(to, from, next) {
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    // Redirect to the previous page if not authenticated
    router.go(-1);
  } else {
    next();
  }
}

function guestMiddleware(to, from, next) {
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn) {
    // Redirect to the previous page if already logged in
    router.go(-1);
  } else {
    next();
  }
}
