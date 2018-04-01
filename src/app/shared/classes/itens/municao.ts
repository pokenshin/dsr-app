import { Material } from "./material";
import { ValorMag } from "../..";
import { Equipamento } from "./equipamento";

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
