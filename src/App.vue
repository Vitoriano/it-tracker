<template>
  <main class="columns is-gapless is-multiline"
  :class="{ 'dark-mode': modoDark }">

    <div class="column is-one-quarter ">
        <BarraLateral @aoAlterarTema="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
      <router-view />
    </div>

  </main>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import BarraLateral from './components/BarraLateral.vue';

  export default defineComponent({
    name: 'App',
    components: {
      BarraLateral,
    },
    data() {
      return {
        modoDark: false
      }
    },
    methods: {
      trocarTema(darkMode: boolean) {
        this.modoDark = darkMode;
      }
    },
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
