import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoMagma implements Elemento {
    id: number = 17;
    nome: string = "Magma";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
