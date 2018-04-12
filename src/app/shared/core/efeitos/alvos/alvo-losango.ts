import { AlvoHabilidade } from "./";
import { ValorMag } from 'shared/core';
import { Ser } from 'shared/core/ser';

export class AlvoLosango implements AlvoHabilidade {
    constructor(
        public id: number = 6,
        public nome: string = 'Losango',
        public raioMaximo: ValorMag = new ValorMag(),
        public alvosDeclarados: Ser[] = new Array<Ser>()
    ){}
    
}
