import { Plano } from "./";

export class Origem {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public plano: Plano = new Plano()
    ){
        //do something
    }

}
