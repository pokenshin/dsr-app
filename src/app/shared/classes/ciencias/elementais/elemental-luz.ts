import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalLuz implements Elemento {
    id: number = 15;
    nome: string = "Luz";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
