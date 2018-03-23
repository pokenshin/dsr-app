import { DuracaoEfeito } from "./duracao-efeito";
import { AlvoHabilidade } from "../ciencias/alvo-habilidade";

export interface Efeito {
    tipo: String;
    descricao: string;
    duracao: DuracaoEfeito;
    tipoAlvo: AlvoHabilidade;
}
