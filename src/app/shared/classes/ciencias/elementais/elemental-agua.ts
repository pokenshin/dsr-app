import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalAgua implements Elemento {
    id: number = 2;
    nome: string = "Água";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
