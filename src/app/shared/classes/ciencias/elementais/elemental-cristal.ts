import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalCristal implements Elemento {
    id: number = 6;
    nome: string = "Cristal";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
