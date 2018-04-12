import { Item, Material } from "./";

export abstract class Equipamento extends Item {
    constructor(
        public materialBase: Material = new Material(),
        public slot: number = 0    
    ){
        super();
    }
    
}
