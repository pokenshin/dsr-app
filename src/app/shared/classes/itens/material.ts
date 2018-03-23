import { Item } from "./item";
import { ValorMag } from "../..";

export class Material extends Item {
    dureza: ValorMag;
    resistencia: ValorMag;
    densidadePorGrama: ValorMag;
}
