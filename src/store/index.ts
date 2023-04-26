import { INotificacoes } from "@/interfaces/INotificacoes";
import IProjeto from "@/interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import http from "@/http";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO, DEFINIR_TAREFA, DELETE_PROJETO, OBTER_PROJETOS, OBTER_TAREFAS } from "./types-actions";
import { ADICIONAR_NOTIFICACAO, ADICIONAR_PROJETO, CARREGAR_PROJETOS, EDITAR_PROJETO, REMOVER_PROJETO } from "./types-mutations";
import ITarefa from "@/interfaces/ITarefa";

interface IState {
  projects: IProjeto[];
  notificacoes: INotificacoes[];
  tarefas: ITarefa[];
}

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: [],
    notificacoes: [],
    tarefas: [],
  },
  mutations: {
    [ADICIONAR_PROJETO]: 
    (state, nomeDoProjeto: string) => {

      const projeto = {
          id: new Date().toISOString(),
          nome: nomeDoProjeto
      } as IProjeto;

      state.projects.push(projeto);
    },
    [EDITAR_PROJETO]: (state, projeto: IProjeto) => {
      const index = state.projects.findIndex(p => p.id === projeto.id);
      state.projects[index] = projeto;
    },
    [REMOVER_PROJETO]: (state, id: string) => {
      const index = state.projects.findIndex(p => p.id === id);
      state.projects.splice(index, 1);
    },
    [ADICIONAR_NOTIFICACAO]: (state, notificacao: INotificacoes) => {
      notificacao.id = new Date().getTime();
      state.notificacoes.push(notificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(n => n.id !== notificacao.id);
      }, 3000);
    },
    [CARREGAR_PROJETOS]: (state, projetos: IProjeto[]) => {
      state.projects = projetos;
    },
    [DEFINIR_TAREFA]: 
    (state, tarefas: ITarefa[]) => {
      state.tarefas = tarefas;
    },
  },
  actions: {
    [OBTER_PROJETOS]({ commit }) {
      http.get("projetos")
        .then(response => {
          commit(CARREGAR_PROJETOS, response.data);
        });
    },
    [CADASTRAR_PROJETO](context, nomeDoProjeto: string) {
      const projeto = {
        nome: nomeDoProjeto
      } as IProjeto;

      return http.post("projetos", projeto);
    },
    [ALTERAR_PROJETO](context, projeto: IProjeto) {
      return http.put(`projetos/${projeto.id}`, projeto);
    },
    [DELETE_PROJETO]({ commit }, id: string) {
      return http.delete(`projetos/${id}`)
        .then(() => {
          commit(REMOVER_PROJETO, id);
        });
    },
    [OBTER_TAREFAS]({ commit }) {
      http.get("tarefas")
        .then(response => {
          commit(DEFINIR_TAREFA, response.data);
        });
    },
  }
})

export function useStore(): Store<IState> {
  return vuexUseStore(key);
}