import { AlvoHabilidade } from "./alvo-habilidade";
import { ValorMag, Ser } from "../../..";

export class AlvoVetor implements AlvoHabilidade {
    constructor(
        public id: number = 5,
        public nome: string = 'Vetor',
        public pulos: ValorMag = new ValorMag(),
        public alvos: Ser[] = new Array<Ser>()
    ){}
    
}
