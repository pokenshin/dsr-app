import { Carisma } from "./carisma";
import { Destino } from "./destino";

export class Indole {
    id: number;
    nome: string;
    carisma: Carisma;
    destino: Destino;

    constructor(){
        this.id = 0;
        this.nome = "";
        this.carisma = new Carisma();
        this.destino = new Destino();
    }
}
