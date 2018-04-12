import { Elemento } from 'shared/core/ciencias/elementais';
import { ValorMag } from 'shared/core';

export class ElementoMagma implements Elemento {
    id: number = 17;
    nome: string = "Magma";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
