import { Esfera } from "./";

export class Ciencia {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public esfera: Esfera = new Esfera()
    ){}
    
}
