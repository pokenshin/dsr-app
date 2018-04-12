import { Atributo } from "./";
import { ValorMag } from 'shared/core';

export class Forca extends Atributo {
    potencia: ValorMag;
    golpe: ValorMag;
    dureza: ValorMag;
    vigor: ValorMag;
    sustentacao: ValorMag;
    bonusCP: number;
    
    constructor(){
        super();
        this.potencia = new ValorMag();
        this.golpe = new ValorMag();
        this.dureza = new ValorMag();
        this.vigor = new ValorMag();
        this.sustentacao = new ValorMag();
        this.bonusCP = 0;
    }
}
