import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalEntropia implements Elemento {
    id: number = 8;
    nome: string = "Entropipa";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
