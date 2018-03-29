import { Modificador } from "./modificadores/modificador";
import { Ciencia } from "../ciencias/ciencia";

export class Pericia {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public ciencia: Ciencia = new Ciencia(),
        public caracteristicas: string = '',
        public modificadores: Modificador[] = new Array<Modificador>()
    ){}
}
