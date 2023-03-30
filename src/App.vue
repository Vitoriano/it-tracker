<template>
  <main class="columns is-gapless is-multiline"
  :class="{ 'dark-mode': modoDark }">

    <div class="column is-one-quarter ">
        <BarraLateral @aoAlterarTema="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
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
    </div>

  </main>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import BarraLateral from './components/BarraLateral.vue';
  import FormularioBox from './components/FormularioBox.vue';
  import Tarefa from './components/Tarefa.vue';
  import ITarefa from './interfaces/ITarefa';
  import Box from './components/Box.vue';

  export default defineComponent({
    name: 'App',
    components: {
      BarraLateral,
      FormularioBox,
      Tarefa,
      Box
    },
    data() {
      return {
        tarefas: [] as ITarefa[],
        modoDark: false
      }
    },
    methods: {
      adicionarTarefa(tarefa: ITarefa) {
        this.tarefas.push(tarefa);
      },
      trocarTema(darkMode: boolean) {
        this.modoDark = darkMode;
      }
    },
    computed:{
      listaEstaVazia(): boolean {
        return this.tarefas.length === 0;
      }
    }
  });

</script>

<style>
  .lista {
    padding:1.25rem ;
  }

  main {
    --bg-primary: #ffffff;
    --text-primary: #000000;
  }

  main.dark-mode {
    --bg-primary: #2b2d42;
    --text-primary: #ddd;
  }

  .conteudo {
    background-color: var(--bg-primary);
    /* color: var(--text-primary); */
  }
</style>
