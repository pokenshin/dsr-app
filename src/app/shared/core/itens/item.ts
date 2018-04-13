import { Modificador } from "shared/core/ser/modificadores";
import { ValorMag } from 'shared/core';
import { Material } from "./material";
import { Energia } from "shared/core/energias";

export abstract class Item {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public nivel: number = 0,
        public magnitude: number = 0,
        public raridade: number = 0,
        public caracteristicas: string = '',
        public modificadores: Modificador[] = new Array<Modificador>(),
        public massa: ValorMag = new ValorMag(),
        public essencia: number = 0,
        public energia: Energia = new Energia(),
        public valor: number = 0,
        public tipo: number = 0,
        public comprimento: ValorMag = new ValorMag(),
        public largura: ValorMag = new ValorMag(),
        public peso: ValorMag = new ValorMag()
    ){}

}
