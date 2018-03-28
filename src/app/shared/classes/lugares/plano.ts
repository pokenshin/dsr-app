import { Realidade } from "./realidade";

export class Plano {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public realidade: Realidade = new Realidade()
    ){}

}
