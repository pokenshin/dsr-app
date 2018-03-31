import { AlvoHabilidade } from "./alvo-habilidade";
import { ValorMag, Ser } from "../../..";

export class AlvoLosango implements AlvoHabilidade {
    constructor(
        public id: number = 6,
        public nome: string = 'Losango',
        public raioMaximo: ValorMag = new ValorMag(),
        public alvosDeclarados: Ser[] = new Array<Ser>()
    ){}
    
}
