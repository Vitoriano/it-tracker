<template>

      <FormularioBox  @aoSalvarTarefa="adicionarTarefa"/>

      <div class="lista">
        <Tarefa 
          v-for="(tarefa, index) in tarefas" 
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="listaEstaVazia">
          Você não tem tarefas
        </Box>
      </div>
   
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import FormularioBox from '../components/FormularioBox.vue';
  import Tarefa from '../components/Tarefa.vue';
  import ITarefa from '../interfaces/ITarefa';
  import Box from '../components/Box.vue';

  export default defineComponent({
    name: 'App',
    components: {
      FormularioBox,
      Tarefa,
      Box
    },
    data() {
      return {
        tarefas: [] as ITarefa[],
      }
    },
    methods: {
      adicionarTarefa(tarefa: ITarefa) {
        this.tarefas.push(tarefa);
      },
    },
    computed:{
      listaEstaVazia(): boolean {
        return this.tarefas.length === 0;
      }
    }
  });

</script>

<style>
</style>
