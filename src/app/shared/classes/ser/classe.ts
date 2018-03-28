import { Atributo } from "../atributos/atributo";
import { Pericia } from "./pericia";
import { Ciencia } from "./ciencia";

export class Classe {
    id: number;
    nome: string;
    estilo: string;
    funcao: string;
    origemPoder: string;
    atributoFisico: string;
    atributoMental: string;
    atributoEspiritual: string;
    descricao: string;
    ciencia: Ciencia;
    pericias: Pericia[];
}
