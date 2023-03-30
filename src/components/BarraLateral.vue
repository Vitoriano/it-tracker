<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo-aqui" />
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao  }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoAlterarTema"],
  data(){
    return {
      darkMode: false
    }
  },
  computed: {
    textoBotao(): string {
      return this.darkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema() {
      this.darkMode = !this.darkMode;
      this.$emit('aoAlterarTema', this.darkMode)
    }
  }
})

</script>

<style scoped>

header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5em;
    height: auto;
  }
}
</style>