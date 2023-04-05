<template>
  <div class="notificacoes">
    <article 
    class="message is-success" 
    v-for="notificacao in notificacoes" :key="notificacao.id"
    :class="context[notificacao.tipo]"
    >
      <div class="message-header">
        {{ notificacao.title }}
      </div>
      <div class="message-body">
       {{ notificacao.text  }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
  import { TipoNotificacao } from '@/interfaces/INotificacoes';
import { useStore } from '@/store';
import { defineComponent, computed } from 'vue';

  export default defineComponent({
    name: 'Notificacoes',
    data(){
      return {
        context: {
          [TipoNotificacao.SUCESSO]: 'is-success',
          [TipoNotificacao.FALHA]: 'is-danger',
          [TipoNotificacao.ATENCAO]: 'is-warning',
        }
      }
    },
    setup() {
      const store = useStore();
      return {
        notificacoes: computed(() => store.state.notificacoes),
      };
    }
   
  });
</script>

<style scoped>
  .notificacoes {
    position: absolute;
    padding: 8px;
    right: 0;
    width: 300px;
    z-index: 9999;
  }
</style>