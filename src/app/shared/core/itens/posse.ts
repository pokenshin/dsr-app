import { Item, Material } from "./";

export class Posse extends Item {
    constructor(
        public materialBase: Material = new Material()
    ){
        super();
    }
    
}
