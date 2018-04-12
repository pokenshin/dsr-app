import { Material, Equipamento } from "./";
import { ValorMag } from 'shared/core';

export class Municao extends Equipamento {
    constructor(
        public materialBase: Material = new Material(),
        public danoBonus: ValorMag = new ValorMag(),
        public penetracaoBonus: ValorMag = new ValorMag(),
        public impactoBonus: ValorMag = new ValorMag(),
        public corteBonus: ValorMag = new ValorMag()
    ){
        super();
    }
}
