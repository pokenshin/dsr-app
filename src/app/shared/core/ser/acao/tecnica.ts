import { Energia } from "shared/core/energias";
import { Acao } from "./acao";

export class Tecnica extends Acao {
    constructor(
        public energia: Energia = new Energia()
    ){
        super();
    }
}
