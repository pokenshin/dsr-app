import { Modificador } from "../modificadores/modificador";
import { Ciencia } from "./ciencia";

export class Pericia {
    id: number;
    nome: string;
    ciencia: Ciencia;
    caracteristicas: string;
    modificadores: Modificador[];
}
