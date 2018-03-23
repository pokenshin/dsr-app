import { Modificador } from "../modificadores/modificador";
import { ValorMag } from "../..";
import { Material } from "./material";

export abstract class Item {
    id: number;
    nome: string;
    nivel: number;
    magnitude: number;
    raridade: number;
    caracteristicas: string;
    modificadores: Modificador[];
    massa: ValorMag;
    essencia: number;
    energia: number;
    valor: number;
    tipo: number;
    materialBase: Material;
    comprimento: ValorMag;
    largura: ValorMag;
    peso: ValorMag;
}
