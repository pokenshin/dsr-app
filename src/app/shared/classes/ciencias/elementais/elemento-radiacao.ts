import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoRadiacao implements Elemento {
    id: number = 22;
    nome: string = "Radiação";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
