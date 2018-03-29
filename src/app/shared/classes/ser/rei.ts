import { Modificador } from "./modificadores/modificador";

export class Rei {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public magnitude: number = 0,
        public modificadores: Modificador[] = Array<Modificador>(),
        public origem: string = '',
        public cor: string = ''
    ){}
}
