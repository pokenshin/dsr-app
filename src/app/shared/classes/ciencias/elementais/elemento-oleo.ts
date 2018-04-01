import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoOleo implements Elemento {
    id: number = 20;
    nome: string = "Óleo";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
