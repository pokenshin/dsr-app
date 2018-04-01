import { Item } from "./item";
import { Material } from "./material";

export abstract class Equipamento extends Item {
    constructor(
        public materialBase: Material = new Material(),
        public slot: number = 0    
    ){
        super();
    }
    
}
