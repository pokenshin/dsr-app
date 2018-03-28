import { Modificador } from "./modificador";
import { Origem } from "../lugares/origem";
import { Especie } from "../identidade/especie";
import { Classe } from "../ciencias/classe";
import { Indole } from "../identidade/indole";
import { Rei } from "../identidade/rei";

export class ModIdentidade extends Modificador {
    nome:string;
    origem: Origem;
    corpo:number;
    especies: Especie[];
    classes: Classe[];
    natureza:string;
    indole: Indole;
    magnitude: number;
    reis: Rei[];
    ki: number;
    nivel: number;
    
    constructor(){
        super();
    }
}
