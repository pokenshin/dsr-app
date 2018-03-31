import { Efeito } from "./efeito";
import { Modificador } from "../ser/modificadores/modificador";
import { AlvoHabilidade } from "./alvos/alvo-habilidade";
import { DuracaoEfeito } from "./duracao-efeito";
import { AlvoPonto } from "./alvos/alvo-ponto";
import { ModIdentidade } from "../ser/modificadores/mod-identidade";

export class EfeitoModificador implements Efeito {
    constructor(
        public tipo: string = 'Modificador',
        public descricao: string = '',
        public duracao: DuracaoEfeito = new DuracaoEfeito(),
        public tipoAlvo: AlvoHabilidade = new AlvoPonto(),
        public modificador: Modificador = new ModIdentidade()
    ){
        if (descricao == ''){
            this.descricao = "Aplica o modificador " + modificador.fonteModificacao;
        }
    }

}
