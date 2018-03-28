import { Forca } from "./atributos/forca";
import { Materia } from "./atributos/materia";
import { Destreza } from "./atributos/destreza";
import { Intelecto } from "./atributos/intelecto";
import { Criatividade } from "./atributos/criatividade";
import { Existencia } from "./atributos/existencia";
import { Ideia } from "./atributos/ideia";

export class Atributos {
    constructor(
        public forca: Forca = new Forca(),
        public materia: Materia = new Materia(),
        public destreza: Destreza = new Destreza(),
        public intelecto: Intelecto = new Intelecto(),
        public criatividade: Criatividade = new Criatividade(),
        public existencia: Existencia = new Existencia(),
        public ideia: Ideia = new Ideia(),
    ){
        //do something
    }
}
