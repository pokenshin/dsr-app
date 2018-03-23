import { ValorMag } from "../..";

export class Resistencia {
    nome: string;
    positiva: ValorMag;
    negativa: ValorMag;

    constructor(nomeResist?: string, positivaResist?: ValorMag, negativaResist?: ValorMag)
    {
        this.nome = nomeResist || "";
        this.positiva = positivaResist || new ValorMag();
        this.negativa = negativaResist || new ValorMag();
    }
}
