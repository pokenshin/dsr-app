import { Origem } from "../lugares";
import { Especie } from "./especie";
import { Classe, Indole, Rei } from "./";

export class Identidade {
    constructor(
        public nome: string = '',
        public origem: Origem = new Origem(),
        public corpo: number = 0,
        public especies: Especie[] = new Array<Especie>(),
        public classes: Classe[] = new Array<Classe>(),
        public natureza: Indole = new Indole,
        public indole: Indole = new Indole,
        public magnitude: number = 0,
        public reis: Rei[] = new Array<Rei>(),
        public ki: number = 0 ,
        public nivel: number = 0,
    ){}
}
