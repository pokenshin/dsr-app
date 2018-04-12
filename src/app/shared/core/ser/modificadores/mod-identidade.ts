import { Modificador } from "./";
import { Origem } from "shared/core/lugares";
import { Especie } from "shared/core/ser/especie";
import { Classe, Indole, Rei } from "shared/core/ser/";

export class ModIdentidade extends Modificador {
    constructor(
        public nome:string = '',
        public origem:Origem = new Origem(),
        public corpo:number = 0,
        public especies: Especie[] = new Array<Especie>(),
        public classes: Classe[] = new Array<Classe>(),
        public natureza:string = '',
        public indole: Indole = new Indole(),
        public magnitude: number = 0,
        public reis: Rei[] = new Array<Rei>(),
        public ki: number = 0,
        public nivel: number = 0
    ){
        super();
    }
}
