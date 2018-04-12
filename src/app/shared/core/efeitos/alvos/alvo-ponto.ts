import { AlvoHabilidade } from "./";
import { Ser } from "shared/core/ser";

export class AlvoPonto implements AlvoHabilidade {
    constructor(
        public id: number = 2,
        public nome: string = 'Ponto',
        public alvo: Ser = new Ser()
    ){}
}
