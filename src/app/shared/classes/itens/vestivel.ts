import { Equipamento } from "./equipamento";
import { ValorMag } from "../..";

export class Vestivel extends Equipamento {
    constructor(
        public resCorte: ValorMag = new ValorMag(),
        public resPenetracao: ValorMag = new ValorMag(),
        public resImpacto: ValorMag = new ValorMag(),
        public resDegeneracao: ValorMag = new ValorMag()
    ){
        super();
    }
    

}
