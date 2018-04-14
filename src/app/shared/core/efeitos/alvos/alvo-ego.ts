import { AlvoHabilidade } from "./alvo-habilidade";

export class AlvoEgo implements AlvoHabilidade {
    constructor(
        public id: number = 0,
        public nome: string = 'Ego'
    ){}
}
