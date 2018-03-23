import { ValorMag } from "../..";

export abstract class Atributo {
    classe: string;
    nivel: number;
    pontos: number;
    porcentagem: ValorMag;

    constructor(){
        this.classe = 'P';
        this.nivel = 0;
        this.pontos = 0;
        this.porcentagem = new ValorMag();
    }
}
