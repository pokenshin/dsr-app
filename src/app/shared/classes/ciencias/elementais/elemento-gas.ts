import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoGas implements Elemento {
    id: number = 12;
    nome: string = "Gás";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
