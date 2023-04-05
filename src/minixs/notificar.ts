import { TipoNotificacao } from "@/interfaces/INotificacoes"
import { ADICIONAR_NOTIFICACAO } from "@/store/types-mutations"

import { store } from '@/store'

export const notificacaoMixin = { 
  methods: {
    notificar(tipo: TipoNotificacao, title: string, text: string): void {
      store.commit(ADICIONAR_NOTIFICACAO, {
          tipo: tipo,
          title: title,
          text: text
        })
    }
  }
}