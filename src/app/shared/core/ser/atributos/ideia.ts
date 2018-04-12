import { Atributo } from "./";
import { ValorMag } from 'shared/core';

export class Ideia extends Atributo {
    ki: number;
    base: number;
    misterio: ValorMag;
    holismo: ValorMag;
    nexo: ValorMag;
    bonusMP: ValorMag;
    bonusCP: number;

    constructor(){
        super();
        this.ki = 0;
        this.base = 0;
        this.misterio = new ValorMag();
        this.holismo = new ValorMag();
        this.nexo = new ValorMag();
        this.bonusMP = new ValorMag();
        this.bonusCP = 0;
    }
}
