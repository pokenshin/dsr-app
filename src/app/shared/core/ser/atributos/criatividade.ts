import { Atributo } from "./atributo";
import { ValorMag } from 'shared/core';

export class Criatividade extends Atributo {
    singularidade: ValorMag;
    invencao: ValorMag;
    tutor: ValorMag;
    realidade: ValorMag;
    irrealidade: ValorMag;
    bonusMP: ValorMag;
    bonusCP: number;

    constructor(){
        super();
        this.singularidade = new ValorMag();
        this.invencao = new ValorMag();
        this.tutor = new ValorMag();
        this.realidade = new ValorMag();
        this.irrealidade = new ValorMag();
        this.bonusMP = new ValorMag();
        this.bonusCP = 0;
    }
}
