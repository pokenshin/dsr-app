import { Material } from "./material";
import { Equipamento } from "./equipamento";
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
