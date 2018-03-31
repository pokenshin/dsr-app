import { AlvoHabilidade } from "./alvo-habilidade";
import { Ser } from "../../..";

export class AlvoElipse implements AlvoHabilidade {
    constructor(
        public id: number = 8,
        public nome: string = 'Elipse',
        public regras: string = '',
        public alvos: Ser[] = new Array<Ser>()
    ){

    }
}
