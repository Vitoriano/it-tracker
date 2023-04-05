<template>
  <section>
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
  import { TipoNotificacao } from '@/interfaces/INotificacoes';
  import { notificacaoMixin } from '@/minixs/notificar';
  import { useStore } from '@/store';
  import { ADICIONAR_PROJETO, EDITAR_PROJETO } from '@/store/types-mutations';
  import useNotifiicador  from '@/hooks/notificador';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Formulario',
    props: {
      id: {
        type: String
      }
    },
    // mixins: [
    //   notificacaoMixin
    // ],
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
          this.store.commit(EDITAR_PROJETO, {
            id: this.id,
            nome: this.nomeDoProjeto
          });
          this.notificar(TipoNotificacao.ATENCAO, 'Sucesso', 'Projeto editado com sucesso');
          this.$router.push('/projetos');
          return;
        }else {
          this.store.commit(ADICIONAR_PROJETO, 
          this.nomeDoProjeto)
          this.nomeDoProjeto = '';
          this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Projeto adicionado com sucesso');
          this.$router.push('/projetos');
        }
      },
    },
    setup() {
      const store = useStore();
      const { notificar } = useNotifiicador()
      return {
        store,
        notificar
      }
    }
  });

</script>

