import IProjeto from "./IProjetos";

export default interface ITarefa {
  tempo: number;
  descricao: string;
  projeto: IProjeto;
}