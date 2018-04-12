import { ValorMag } from 'shared/core';

export interface Elemento {
    id: number;
    nome: string;
    valorPositivo: ValorMag;
    valorNegativo: ValorMag;
}
