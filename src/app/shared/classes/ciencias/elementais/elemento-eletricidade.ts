import { Elemento } from "./elemento";
import { ValorMag } from "../../..";

export class ElementoEletricidade implements Elemento {
    id: number = 7;
    nome: string = "Eletricidade";
    valorPositivo: ValorMag = new ValorMag();
    valorNegativo: ValorMag = new ValorMag();
}
