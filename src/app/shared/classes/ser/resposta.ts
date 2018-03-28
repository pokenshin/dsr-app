import { ValorMag } from "../..";

export class Resposta {
    desespero: ValorMag;
    panico: ValorMag;
    medo: ValorMag;
    indiferenca: ValorMag;
    coragem: ValorMag;
    bravura: ValorMag;
    heroismo: ValorMag;

    constructor(){
        this.desespero = new ValorMag();
        this.panico = new ValorMag();
        this.medo = new ValorMag();
        this.indiferenca = new ValorMag();
    }
}
