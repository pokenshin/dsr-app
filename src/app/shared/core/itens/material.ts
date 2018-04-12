import { Item } from "./";
import { ValorMag } from 'shared/core';

export class Material extends Item {
    dureza: ValorMag;
    resistencia: ValorMag;
    densidadePorGrama: ValorMag;
}
