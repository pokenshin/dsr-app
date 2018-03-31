import { DuracaoEfeito } from "./duracao-efeito";
import { AlvoHabilidade } from "./alvos/alvo-habilidade";

export interface Efeito {
    tipo: string;
    descricao: string;
    duracao: DuracaoEfeito;
    tipoAlvo: AlvoHabilidade;
}
