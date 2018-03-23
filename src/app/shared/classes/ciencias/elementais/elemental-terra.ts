import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalTerra implements Elemento {
    id: number = 24;
    nome: string = "Terra";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
