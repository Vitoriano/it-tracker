<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idprojeto">
            <option value="">Selecione um projeto</option>
            <option
              v-for="projeto in projetos"
              :key="projeto.id"
              :value="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
       <Temporizador @ao-finalizar="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Temporizador from './Temporizador.vue';

export default defineComponent({
  name: "FormulárioBox",
  emits:["aoSalvarTarefa"],
  components: {
    Temporizador
  },
  data(){
    return {
     descricao: '',
     idprojeto: ''
    }
  },
  methods: {
    finalizarTarefa (tempoEmSegundos: number) {
      this.$emit('aoSalvarTarefa', {
        descricao: this.descricao,
        tempo: tempoEmSegundos,
        projeto: this.projetos.find(projeto => projeto.id === this.idprojeto)
      });
      this.descricao = ''
      
    }
  },
  setup() {
   const store = useStore(key);
   return {
     projetos: computed(() => store.state.projects)
   }
  },
  
});
</script>

<style>
.formulario {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>