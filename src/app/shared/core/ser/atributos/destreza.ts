import { Atributo } from "./atributo";
import { ValorMag } from 'shared/core';

export class Destreza extends Atributo {
    reflexo: ValorMag;
    esquiva: ValorMag;
    ataque: ValorMag;
    coordenacao: ValorMag;
    iniciativa: ValorMag;
    bonusCP: number;

    constructor(){
        super();
        this.reflexo = new ValorMag();
        this.esquiva = new ValorMag();
        this.ataque = new ValorMag();
        this.coordenacao = new ValorMag();
        this.iniciativa = new ValorMag();
        this.bonusCP = 0;
    }
}
