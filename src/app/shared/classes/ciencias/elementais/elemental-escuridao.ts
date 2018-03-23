import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementalEscuridao implements Elemento {
    id: number = 9;
    nome: string = "Escuridão";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
