import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Tarefas from "../views/Tarefas.vue";
import Projetos from "../views/Projetos.vue";
import Formulario from "../views/Projetos/Formulario.vue";
import Lista from "../views/Projetos/Lista.vue";

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
    children: [
      {
        path: "",
        name: "Projetos",
        component: Lista,
      },
      {
        path: "novo",
        name: "Novo Projetos",
        component: Formulario,
      },
      {
        path: ":id",
        name: "Editar Projetos",
        component: Formulario,
        props: true
      }
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router;