import { Atributo } from "./atributo";
import { ValorMag } from 'shared/core';

export class Intelecto extends Atributo {
    concentracao: ValorMag;
    visualizacao: ValorMag;
    aprendizagem: ValorMag;
    senso: ValorMag;
    eidos: ValorMag;
    bonusCP: number;

    constructor(){
        super();
        this.concentracao = new ValorMag();
        this.visualizacao = new ValorMag();
        this.aprendizagem = new ValorMag();
        this.senso = new ValorMag();
        this.eidos = new ValorMag();
        this.bonusCP = 0;
    }
}
