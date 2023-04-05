export enum TipoNotificacao {
  SUCESSO,
  FALHA,
  ATENCAO
}

export interface INotificacoes {
  title: string;
  text: string;
  tipo: TipoNotificacao;
  id: number;
}