import { Equipamento } from "./equipamento";

export class Arma extends Equipamento {
    constructor(
        public danoPenetracao: number = 0,
        public danoCorte: number = 0,
        public danoImpacto: number = 0,
        public atributoBonus: string = '',
        public modificadorDano: string = '',
        public multiplicadorCritico: number = 0
    ){
        super();
    }
}
