<template>
  <main class="columns is-gapless is-multiline">

    <div class="column is-one-quarter">
        <BarraLateral />
    </div>

    <div class="column is-three-quarter">
      <FormularioBox  @aoSalvarTarefa="adicionarTarefa"/>

      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index"
        :tarefa="tarefa"/>
      </div>
    </div>

  </main>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import BarraLateral from './components/BarraLateral.vue';
  import FormularioBox from './components/FormularioBox.vue';
  import Tarefa from './components/Tarefa.vue';
  import ITarefa from './interfaces/ITarefa';
 
  export default defineComponent({
    name: 'App',
    components: {
      BarraLateral,
      FormularioBox,
      Tarefa
    },
    data() {
      return {
        tarefas: [] as ITarefa[]
      }
    },
    methods: {
      adicionarTarefa(tarefa: ITarefa) {
        this.tarefas.push(tarefa);
      }
    }
  });

</script>

<style>
  .lista {
    padding:1.25rem ;
  }
</style>
