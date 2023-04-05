import { INotificacoes } from "@/interfaces/INotificacoes";
import IProjeto from "@/interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONAR_NOTIFICACAO, ADICIONAR_PROJETO, EDITAR_PROJETO, REMOVER_PROJETO } from "./types-mutations";

interface IState {
  projects: IProjeto[];
  notificacoes: INotificacoes[];
}

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: [],
    notificacoes: []
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
    }
  }
})

export function useStore(): Store<IState> {
  return vuexUseStore(key);
}