import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalMadeira implements Elemento {
    id: number = 16;
    nome: string = "Madeira";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
