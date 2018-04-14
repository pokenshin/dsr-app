import { Item } from "./item";
import { Efeito } from "shared/core/efeitos/efeito";

export class Consumivel extends Item {
    constructor(
        public efeitos: Efeito[] = new Array<Efeito>()
    ){
        super();
    }
}
