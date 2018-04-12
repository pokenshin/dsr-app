import { Elemento } from 'shared/core/ciencias/elementais';
import { ValorMag } from 'shared/core';

export class ElementoRocha implements Elemento {
    id: number = 23;
    nome: string = "Rocha";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
