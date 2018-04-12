import { Elemento } from 'shared/core/ciencias/elementais';
import { ValorMag } from 'shared/core';

export class ElementoMadeira implements Elemento {
    id: number = 16;
    nome: string = "Madeira";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
