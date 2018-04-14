import { Efeito } from "./efeito";
import { DuracaoEfeito } from "./duracao-efeito";
import { Modificador, ModIdentidade } from "shared/core/ser/modificadores";
import { AlvoHabilidade, AlvoPonto } from "./alvos";

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
