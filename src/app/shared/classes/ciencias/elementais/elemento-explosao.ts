import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoExplosao implements Elemento {
    id: number = 10;
    nome: string = "Explosão";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
