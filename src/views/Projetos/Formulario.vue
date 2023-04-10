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
  import useNotifiicador  from '@/hooks/notificador';
  import { defineComponent } from 'vue';
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from '@/store/types-actions';
import { EDITAR_PROJETO } from '@/store/types-mutations';

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
        const projeto = this.store.state.projects.find(projeto => projeto.id == this.id);
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
          this.store.dispatch(ALTERAR_PROJETO, {
            id: this.id,
            nome: this.nomeDoProjeto
          }).then(() => {
           this.handlerSucesso('alterado');
          })
         
        }else {
          this.store.dispatch(CADASTRAR_PROJETO, 
          this.nomeDoProjeto
          ).then(() => {
            this.handlerSucesso('adicionado');
          })
        }
      },
      handlerSucesso(text: string) {
        this.nomeDoProjeto = '';
        this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', `Projeto ${text} com sucesso`);
        this.$router.push('/projetos');
      }
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

