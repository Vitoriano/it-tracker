import IProjeto from "@/interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface IState {
  projects: IProjeto[];
}

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: []
  },
  mutations: {
    'ADICIONAR_PROJETO': 
    (state, nomeDoProjeto: string) => {

      const projeto = {
          id: new Date().toISOString(),
          nome: nomeDoProjeto
      } as IProjeto;

      state.projects.push(projeto);
    }
  }
})

export function useStore(): Store<IState> {
  return vuexUseStore(key);
}