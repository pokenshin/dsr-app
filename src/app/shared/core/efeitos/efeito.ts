import { DuracaoEfeito } from "./duracao-efeito";
import { AlvoHabilidade } from "./alvos";

export interface Efeito {
    tipo: string;
    descricao: string;
    duracao: DuracaoEfeito;
    tipoAlvo: AlvoHabilidade;
}
