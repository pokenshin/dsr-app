import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalAr implements Elemento {
    id: number = 3;
    nome: string = "Água";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
