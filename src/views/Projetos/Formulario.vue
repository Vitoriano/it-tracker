<template>
  <section class="projetos">
    <h1 class="title">
      Projetos
    </h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label class="label" for="nomeDoProjeto">Nome do projeto</label>
        <input 
          class="input" 
          type="text" 
          placeholder="Nome do projeto" v-model="nomeDoProjeto" 
          id="nomeDoProjeto"
        />
      </div>

      <div class="field">
        <button class="button" type="submit">
          Adicionar projeto
        </button>
      </div>
    </form>

   

  </section>
  
</template>

<script lang="ts">
  import { useStore } from '@/store';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Formulario',
    props: {
      id: {
        type: String
      }
    },
    mounted() {
      if (this.id) {
        const projeto = this.store.state.projects.find(projeto => projeto.id === this.id);
        this.nomeDoProjeto = projeto?.nome || '';
      }
    },
    data() {
      return {
        nomeDoProjeto: '',
      };
    },
    methods: {
      salvar() {

        if(this.id) {
          this.store.commit('EDITAR_PROJETO', {
            id: this.id,
            nome: this.nomeDoProjeto
          });
          this.$router.push('/projetos');
          return;
        }else {
          this.store.commit('ADICIONAR_PROJETO', 
          this.nomeDoProjeto)
          this.nomeDoProjeto = '';

          this.$router.push('/projetos');
        }
      },
    },
    setup() {
      const store = useStore();
      return {
        store,
      }
    }
  });

</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }

</style>