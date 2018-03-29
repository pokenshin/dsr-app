import { ValorMag } from "../..";

export class Deslocamento {
    constructor(
        public valor: ValorMag = new ValorMag(),
        public tipo: string = '',
        public unidade: string = "km/h"
    ){}

    toString(){
        return this.valor.toString() + " " + this.unidade
    }
}
