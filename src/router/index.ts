import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Tarefas from "../views/Tarefas.vue";

const routes: RouteRecordRaw[] = [{
  path: "/",
  name: "Tarefas",
  component: Tarefas,
}];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router;