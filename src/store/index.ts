import IProjeto from "@/interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONAR_PROJETO, EDITAR_PROJETO, REMOVER_PROJETO } from "./types-mutations";

interface IState {
  projects: IProjeto[];
}

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: []
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
    }
  }
})

export function useStore(): Store<IState> {
  return vuexUseStore(key);
}