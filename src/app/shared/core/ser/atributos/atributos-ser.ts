import { Forca } from './forca';
import { Materia } from './materia';
import { Destreza } from './destreza';
import { Intelecto } from './intelecto';
import { Criatividade } from './criatividade';
import { Existencia } from './existencia';
import { Ideia } from "./ideia";

export class AtributosSer {
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
