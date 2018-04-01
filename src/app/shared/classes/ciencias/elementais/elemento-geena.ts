import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoGeena implements Elemento {
    id: number = 13;
    nome: string = "Geena";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
