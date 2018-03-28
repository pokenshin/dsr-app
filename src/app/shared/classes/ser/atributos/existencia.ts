import { Atributo } from "./atributo";
import { ValorMag } from "../..";

export class Existencia extends Atributo {
    conhecimento: ValorMag;
    experiencia: ValorMag;
    ciencia: ValorMag;
    consciencia: ValorMag;
    memoria: ValorMag;
    bonusCP: number;

    constructor(){
        super();
        this.conhecimento = new ValorMag();
        this.experiencia = new ValorMag();
        this.ciencia = new ValorMag();
        this.consciencia = new ValorMag();
        this.memoria = new ValorMag();
        this.bonusCP = 0;
    }

}
