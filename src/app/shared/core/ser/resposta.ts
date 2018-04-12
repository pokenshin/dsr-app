import { ValorMag } from 'shared/core';

export class Resposta {
    constructor(
        public desespero: ValorMag = new ValorMag(),
        public panico: ValorMag = new ValorMag(),
        public medo: ValorMag = new ValorMag(),
        public indiferenca: ValorMag = new ValorMag(),
        public coragem: ValorMag = new ValorMag(),
        public bravura: ValorMag = new ValorMag(),
        public heroismo: ValorMag = new ValorMag(),
    ){}
}
