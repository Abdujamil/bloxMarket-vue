// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Определение маршрутов
const routes = [
  { path: "/", component: () => import("../pages/Home.vue") },
  { path: "/coin", component: () => import("../pages/CoinFlip.vue") },
  { path: "/case", component: () => import("../pages/Cases.vue") },
  { path: "/shop", component: () => import("../pages/Shop.vue") },
  { path: "/profile", component: () => import("../pages/Profile.vue") },
  { path: "/notification", component: () => import("../pages/Notification.vue") },
];

// Создание экземпляра роутера
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;