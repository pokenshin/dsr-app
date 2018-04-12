import { Arma, Municao } from "./";
import { ValorMag, RangeValue } from 'shared/core';

export class ArmaDeTiro extends Arma {
    constructor(
        public tirosPorCarga: number = 0,
        public tirosPorAcao: number = 0,
        public capacidade: number = 0,
        public distancia:RangeValue<ValorMag> = new RangeValue<ValorMag>(),
        public operacoes:string[] = new Array<string>(),
        public municao:Municao = new Municao(),
    ){
        super();
    }
}
