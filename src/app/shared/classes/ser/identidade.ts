import { Origem } from "../lugares/origem";
import { Especie } from "./especie";
import { Classe } from "./classe";
import { Indole } from "./indole";
import { Rei } from "./rei";

export class Identidade {
    constructor(
        public nome: string = '',
        public origem: Origem = new Origem(),
        public corpo: number = 0,
        public especies: Especie[] = new Array<Especie>(),
        public classes: Classe[] = new Array<Classe>(),
        public natureza: string = '',
        public indole: Indole = new Indole,
        public magnitude: number = 0,
        public reis: Rei[] = new Array<Rei>(),
        public ki: number = 0 ,
        public nivel: number = 0,
    ){
        //do something
    }
}
