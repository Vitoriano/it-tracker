import { TipoNotificacao } from "@/interfaces/INotificacoes"
import { store } from "@/store"
import { ADICIONAR_NOTIFICACAO } from "@/store/types-mutations"

type Notificador = {
  notificar: (tipo: TipoNotificacao, title: string, text: string) => void
}

export default (): Notificador => {

  const notificar = (tipo: TipoNotificacao, title: string, text: string): void => {
    store.commit(ADICIONAR_NOTIFICACAO, {
        tipo: tipo,
        title: title,
        text: text
      })
    }

    return {
      notificar
    }
}