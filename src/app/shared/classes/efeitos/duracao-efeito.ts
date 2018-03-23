import { ValorMag } from "../..";

export class DuracaoEfeito {
    tipoDuracao: string;
    valorDuracao: ValorMag;
    unidadeDuracao: string;

    toString(){
        if (this.valorDuracao && this.unidadeDuracao){
            return "Durante " + this.valorDuracao.toString() + " " + this.unidadeDuracao;
        }else{
            return this.tipoDuracao;
        }
    }
}
