import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoOnda implements Elemento {
    id: number = 21;
    nome: string = "Onda";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
