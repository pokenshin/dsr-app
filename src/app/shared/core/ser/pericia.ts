import { Modificador } from "./modificadores";
import { Ciencia } from "shared/core/ciencias/ciencia";

export class Pericia {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public ciencia: Ciencia = new Ciencia(),
        public caracteristicas: string = '',
        public modificadores: Modificador[] = new Array<Modificador>()
    ){}
}
