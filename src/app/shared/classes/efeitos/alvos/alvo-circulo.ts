import { AlvoHabilidade } from "./alvo-habilidade";
import { ValorMag, Ser } from "../../..";

export class AlvoCirculo implements AlvoHabilidade {
    
    constructor(
        public id: number = 4,
        public nome: string = 'Círculo',
        public raioMaximo: ValorMag = new ValorMag(),
        public alvos: Ser[] = new Array<Ser>()
    ){}
}
