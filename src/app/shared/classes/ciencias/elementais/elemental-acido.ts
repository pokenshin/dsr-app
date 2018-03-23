import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalAcido implements Elemento {
    id: number = 1;
    nome: string = "Ácido";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
