import { Elemento } from 'shared/core/ciencias/elementais';
import { ValorMag } from 'shared/core';

export class ElementoAcido implements Elemento {
    id: number = 1;
    nome: string = "Ácido";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
