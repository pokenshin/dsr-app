import { Atributo } from "./atributo";
import { ValorMag } from "../..";

export class Ideia extends Atributo {
    ki: number;
    base: number;
    misterio: ValorMag;
    holismo: ValorMag;
    nexo: ValorMag;
    bonusMP: ValorMag;

    constructor(){
        super();
        this.ki = 0;
        this.base = 0;
        this.misterio = new ValorMag();
        this.holismo = new ValorMag();
        this.nexo = new ValorMag();
        this.bonusMP = new ValorMag();
    }
}
