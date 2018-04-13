import { Ciencia } from "./ciencia";

export class AreaCientifica {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public ciencia: Ciencia = new Ciencia()
    ){}
    
}
