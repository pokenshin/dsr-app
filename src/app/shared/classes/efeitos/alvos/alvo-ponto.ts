import { AlvoHabilidade } from "./alvo-habilidade";
import { Ser } from "../../..";

export class AlvoPonto implements AlvoHabilidade {
    constructor(
        public id: number = 2,
        public nome: string = 'Ponto',
        public alvo: Ser = new Ser()
    ){}
}
