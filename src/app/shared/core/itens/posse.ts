import { Item } from "./item";
import { Material } from "./material";

export class Posse extends Item {
    constructor(
        public materialBase: Material = new Material()
    ){
        super();
    }
    
}
