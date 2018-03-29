import { ValorMag } from "../..";

export class Cerne {
    constructor(
        public iniciativa: ValorMag = new ValorMag(),
        public acao: ValorMag = new ValorMag(),
        public reacao: ValorMag = new ValorMag(),
        public turno: ValorMag = new ValorMag(),
        public destria: ValorMag = new ValorMag(),
        public altura: ValorMag = new ValorMag(),
        public largura: ValorMag = new ValorMag(),
        public comprimento: ValorMag = new ValorMag(),
        public carga: ValorMag = new ValorMag(),
        public massa: ValorMag = new ValorMag(),
        public tenacidade: ValorMag = new ValorMag(),
        public essencia: ValorMag = new ValorMag()
    ){}
}
