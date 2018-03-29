import { TipoHabilidade } from "./tipo-habilidade";
import { Energia } from "../../energias/energia";
import { Pericia } from "../pericia";
import { AreaCientifica } from "../../ciencias/area-cientifica";
import { Efeito } from "../../efeitos/efeito";

export class Habilidade {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public magnitude: number = 0,
        public caracteristicas: string = '',
        public tipo: TipoHabilidade = new TipoHabilidade(),
        public energia: Energia = new Energia(),
        public pericia: Pericia = new Pericia(),
        public areaCientifica: AreaCientifica = new AreaCientifica(),
        public efeitos: Efeito[] = new Array<Efeito>()    
    ){}
}
