import { AlvoHabilidade } from "./alvo-habilidade";
import { Ser } from "../../..";

export class AlvoTriangulo implements AlvoHabilidade {
    constructor(
        public id: number = 7,
        public nome: string = 'Triângulo',
        public alvo: Ser = new Ser()
    ){}
    
}
