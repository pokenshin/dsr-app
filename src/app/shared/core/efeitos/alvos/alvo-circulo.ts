import { AlvoHabilidade } from "./";
import { ValorMag } from 'shared/core';
import { Ser } from 'shared/core/ser';

export class AlvoCirculo implements AlvoHabilidade {
    
    constructor(
        public id: number = 4,
        public nome: string = 'Círculo',
        public raioMaximo: ValorMag = new ValorMag(),
        public alvos: Ser[] = new Array<Ser>()
    ){}
}
