import { Efeito } from "./efeito";
import { DuracaoEfeito } from "./duracao-efeito";
import { AlvoPonto } from "./alvos/alvo-ponto";
import { AlvoHabilidade } from "./alvos/alvo-habilidade";
import { Energia } from "../energias/energia";
import { ValorMag } from "../valormag";

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
