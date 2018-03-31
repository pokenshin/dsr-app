import { AlvoHabilidade } from "./alvo-habilidade";
import { ValorMag, Ser } from "../../..";

export class AlvoLinha implements AlvoHabilidade {
    constructor(
        public id: number = 3,
        public nome: string = 'Linha',
        public distancia: ValorMag = new ValorMag(),
        public velocidade: ValorMag = new ValorMag(),
        public alvo: Ser = new Ser()
    ){}
}
