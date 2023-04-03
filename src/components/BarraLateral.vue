<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo-aqui" />
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao  }}
    </button>
    <nav class="panel mt-5">
      <ul class="lista">
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
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

.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}
</style>