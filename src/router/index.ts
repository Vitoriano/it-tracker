import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Tarefas from "../views/Tarefas.vue";
import Projetos from "../views/Projetos.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: Projetos,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router;