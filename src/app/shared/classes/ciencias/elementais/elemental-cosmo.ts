import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalCosmo implements Elemento {
    id: number = 5;
    nome: string = "Cosmo";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
