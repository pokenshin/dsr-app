import { ValorMag } from "../..";

export class DuracaoEfeito {
    constructor(
        public tipoDuracao: string = '',
        public valorDuracao: ValorMag = new ValorMag(),
        public unidadeDuracao: string = ''
    ){}
   
    toString(){
        if (this.valorDuracao.toString() !=  '0m0' && this.unidadeDuracao != ''){
            return "Durante " + this.valorDuracao.toString() + " " + this.unidadeDuracao;
        }else{
            return this.tipoDuracao;
        }
    }
}
