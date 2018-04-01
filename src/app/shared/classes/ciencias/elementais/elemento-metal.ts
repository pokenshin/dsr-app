import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoMetal implements Elemento {
    id: number = 19;
    nome: string = "Metal";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
