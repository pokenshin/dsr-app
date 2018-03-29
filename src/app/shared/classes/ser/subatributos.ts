import { ValorMag } from "../..";

export class Subatributos {
    constructor(
        public instinto: ValorMag = new ValorMag(),
        public raciocinio: ValorMag = new ValorMag(),
        public subconsciencia: ValorMag = new ValorMag(),
        public autocontrole: ValorMag = new ValorMag(),
        public anatomia: ValorMag = new ValorMag(),
        public animo: ValorMag = new ValorMag(),
        public movimento: ValorMag = new ValorMag(),
        public precisao: ValorMag = new ValorMag(),
        public bonusHP: ValorMag = new ValorMag(),
        public bonusMP: ValorMag = new ValorMag(),
        public bonusCP: ValorMag = new ValorMag(),
        public bonusSP: ValorMag = new ValorMag()
    ){}
}
