import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoAr implements Elemento {
    id: number = 3;
    nome: string = "Água";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
