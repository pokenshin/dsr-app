import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalRocha implements Elemento {
    id: number = 23;
    nome: string = "Rocha";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
