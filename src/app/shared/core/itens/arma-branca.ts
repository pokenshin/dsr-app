import { Arma } from "./arma";
import { RangeValue, ValorMag } from "shared/core";

export class ArmaBranca extends Arma {
    constructor(
        public distancia:RangeValue<ValorMag> = new RangeValue<ValorMag>(),
    ){
        super();
    }
}
