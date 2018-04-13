import { Item } from "./item";
import { ValorMag } from 'shared/core';

export class Material extends Item {
    dureza: ValorMag;
    resistencia: ValorMag;
    densidadePorGrama: ValorMag;
}
