import { ValorMag } from "../..";

export class Deslocamento {
    valor: ValorMag;
    tipo: string;
    unidade: string = "km/h";

    constructor(tipo?:string){
        this.tipo = tipo || "";
        this.valor = new ValorMag();
    }

    toString(){
        return this.valor.toString() + " " + this.unidade
    }
}
