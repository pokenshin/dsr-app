import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoMagnetismo implements Elemento {
    id: number = 18;
    nome: string = "Magnetismo";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
