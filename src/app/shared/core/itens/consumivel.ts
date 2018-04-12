import { Item } from "./";
import { Efeito } from "shared/core/efeitos";

export class Consumivel extends Item {
    constructor(
        public efeitos: Efeito[] = new Array<Efeito>()
    ){
        super();
    }
}
