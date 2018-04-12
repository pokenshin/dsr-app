import { AlvoHabilidade } from "./";
import { ValorMag } from 'shared/core';
import { Ser } from 'shared/core/ser';

export class AlvoLinha implements AlvoHabilidade {
    constructor(
        public id: number = 3,
        public nome: string = 'Linha',
        public distancia: ValorMag = new ValorMag(),
        public velocidade: ValorMag = new ValorMag(),
        public alvo: Ser = new Ser()
    ){}
}
