import { Modificador } from "../ser/modificadores/modificador";
import { ValorMag } from "../..";
import { Material } from "./material";
import { Energia } from "../energias/energia";

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
    energia: Energia;
    valor: number;
    tipo: number;
    materialBase: Material;
    comprimento: ValorMag;
    largura: ValorMag;
    peso: ValorMag;
}
