import { Comportamento } from "./";

export class Elo {
    constructor(
        public cansacoAtual: number = 0,
        public cansacoMax: number = 0,
        public genese: number = 0,
        public geracao: number = 0,
        public fe: number = 0,
        public karma: number = 0,
        public alma: string[] = new Array<string>(),
        public eloDivino: string = '',
        public trajetoria: string = '',
        public idumentaria: string = '',
        public comportamento:Comportamento = new Comportamento()
    ){}
}
