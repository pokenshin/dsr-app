import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalVida implements Elemento {
    id: number = 25;
    nome: string = "Vida";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
