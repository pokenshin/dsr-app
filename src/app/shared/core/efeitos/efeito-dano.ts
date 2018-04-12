import { Efeito, DuracaoEfeito } from "./";
import { AlvoPonto, AlvoHabilidade } from "./alvos";
import { Energia } from "shared/core/energias";
import { ValorMag } from 'shared/core';

export class EfeitoDano implements Efeito {
    constructor(
        public tipo: string = 'Dano',
        public descricao: string = '',
        public duracao: DuracaoEfeito = new DuracaoEfeito(),
        public tipoAlvo: AlvoHabilidade = new AlvoPonto(),
        public energia: Energia = new Energia(),
        public valor: ValorMag = new ValorMag()
    ){
        if (descricao == ''){
            this.descricao = "Recupera " + valor.toString() + " pontos de " + energia.sigla;
        }
    }
    

}
