import { Efeito } from "./efeito";
import { ValorMag } from "../..";
import { Energia } from "../energias/energia";
import { DuracaoEfeito } from "./duracao-efeito";
import { AlvoHabilidade } from "./alvos/alvo-habilidade";
import { AlvoPonto } from "./alvos/alvo-ponto";

export class EfeitoCura implements Efeito {
    constructor(
        public tipo: string = 'Cura',
        public descricao: string = '',
        public duracao: DuracaoEfeito = new DuracaoEfeito(),
        public valor: ValorMag = new ValorMag(),
        public energia: Energia = new Energia(),
        public tipoAlvo: AlvoHabilidade = new AlvoPonto()
    ){
        if (descricao == ''){
            this.descricao = "Recupera " + valor.toString() + " pontos de " + energia.sigla;
        }
    }
    
}
