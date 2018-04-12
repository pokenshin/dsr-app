import { AlvoHabilidade } from "./";
import { Ser } from "shared/core/ser";

export class AlvoElipse implements AlvoHabilidade {
    constructor(
        public id: number = 8,
        public nome: string = 'Elipse',
        public regras: string = '',
        public alvos: Ser[] = new Array<Ser>()
    ){

    }
}
