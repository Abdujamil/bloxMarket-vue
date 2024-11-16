// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Определение маршрутов
const routes = [
  { path: "/", component: () => import("../pages/Home.vue") },
  { path: "/shop", component: () => import("../pages/Shop.vue") },
];

// Создание экземпляра роутера
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;