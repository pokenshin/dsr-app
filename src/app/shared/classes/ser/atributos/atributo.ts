import { ValorMag } from "../../valormag";
import { Evolucao } from "../evolucao";

export abstract class Atributo {
    constructor(
        public classe: string = 'P',
        public nivel: number = 0,
        public pontos: number = 0,
        public porcentagem: ValorMag = new ValorMag(),
        public evolucao: Evolucao = new Evolucao()
    ){}
}
