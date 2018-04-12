import { AlvoHabilidade } from "./";
import { ValorMag } from 'shared/core';
import { Ser } from 'shared/core/ser';

export class AlvoVetor implements AlvoHabilidade {
    constructor(
        public id: number = 5,
        public nome: string = 'Vetor',
        public pulos: ValorMag = new ValorMag(),
        public alvos: Ser[] = new Array<Ser>()
    ){}
    
}
