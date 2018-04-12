import { ValorMag } from 'shared/core';
import { Atributo } from "./";

export class Materia extends Atributo {
    colapso: ValorMag;
    impulso: ValorMag;
    resistencia: ValorMag;
    vitalidade: ValorMag;
    regeneracao: ValorMag;
    bonusCP: number;
    bonusHP: ValorMag;

    constructor(){
        super();
        this.colapso = new ValorMag();
        this.impulso = new ValorMag();
        this.resistencia = new ValorMag();
        this.vitalidade = new ValorMag();
        this.regeneracao = new ValorMag();
        this.bonusCP = 0;
        this.bonusHP = new ValorMag();
    }
}