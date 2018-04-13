import { Acao } from "./acao";
import { Energia } from "shared/core/energias";

export class Arcanidade extends Acao {
    constructor(
        public escola: string = '',
        public nucleo: number = 0,
        public energia: Energia = new Energia()
    ){
        super();
    }
}
