import { TipoHabilidade } from "./";
import { Energia } from "shared/core/energias";
import { Pericia } from "shared/core/ser";
import { AreaCientifica } from "shared/core/ciencias";
import { Efeito } from "shared/core/efeitos";

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
