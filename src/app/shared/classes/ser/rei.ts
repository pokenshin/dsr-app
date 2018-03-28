import { Modificador } from "../modificadores/modificador";

export class Rei {
    id: number;
    nome: string;
    magnitude: number;
    modificadores: Modificador[];
    origem: string;
    cor: string;
}
