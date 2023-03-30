<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
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
      <div class="column">
       <Temporizador @ao-finalizar="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import Temporizador from './Temporizador.vue';

export default defineComponent({
  name: "FormulárioBox",
  emits:["aoSalvarTarefa"],
  components: {
    Temporizador
  },
  data(){
    return {
     descricao: ''
    }
  },
  methods: {
    finalizarTarefa (tempoEmSegundos: number) {
      this.$emit('aoSalvarTarefa', {
        descricao: this.descricao,
        tempo: tempoEmSegundos
      });
      this.descricao = ''
      
    }
  }
  
});
</script>

<style>
.formulario {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>