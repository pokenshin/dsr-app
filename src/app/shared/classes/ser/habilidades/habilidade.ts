import { TipoHabilidade } from "./tipo-habilidade";
import { Energia } from "../energias/energia";
import { Pericia } from "./pericia";
import { AreaCientifica } from "./area-cientifica";
import { Efeito } from "../efeitos/efeito";

export class Habilidade {
    id: number;
    nome: string;
    magnitude: number;
    caracteristicas: string;
    tipo: TipoHabilidade;
    energia: Energia;
    pericia: Pericia;
    areaCientifica: AreaCientifica;
    efeitos: Efeito[];
}
