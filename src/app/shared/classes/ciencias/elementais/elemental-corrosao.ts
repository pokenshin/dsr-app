import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalCorrosao implements Elemento {
    id: number = 4;
    nome: string = "Corrosão";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
