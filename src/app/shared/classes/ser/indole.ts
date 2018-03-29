import { Carisma } from "./carisma";
import { Destino } from "./destino";

export class Indole {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public carisma: Carisma = new Carisma(),
        public destino: Destino = new Destino()
    ){}
}
