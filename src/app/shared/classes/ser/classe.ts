import { Atributo } from "./atributos/atributo";
import { Pericia } from "./pericia";
import { Ciencia } from "../ciencias/ciencia";

export class Classe {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public estilo: string = '',
        public funcao: string = '',
        public origemPoder: string = '',
        public atributoFisico: string = '',
        public atributoMental: string = '',
        public atributoEspiritual: string = '',
        public descricao: string = '',
        public ciencia: Ciencia = new Ciencia(),
        public pericias: Pericia[] = new Array<Pericia>()
    ){}
}
