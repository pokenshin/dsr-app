import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoGravidade implements Elemento {
    id: number = 14;
    nome: string = "Gravidade";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
