import { AlvoHabilidade } from "./";
import { Ser } from "shared/core/ser";

export class AlvoTriangulo implements AlvoHabilidade {
    constructor(
        public id: number = 7,
        public nome: string = 'Triângulo',
        public alvo: Ser = new Ser()
    ){}
    
}
