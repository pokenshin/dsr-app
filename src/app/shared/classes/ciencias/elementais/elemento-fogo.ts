import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoFogo implements Elemento {
    id: number = 11;
    nome: string = "Fogo";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
