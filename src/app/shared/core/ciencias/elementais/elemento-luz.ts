import { Elemento } from 'shared/core/ciencias/elementais';
import { ValorMag } from 'shared/core';

export class ElementoLuz implements Elemento {
    id: number = 15;
    nome: string = "Luz";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
