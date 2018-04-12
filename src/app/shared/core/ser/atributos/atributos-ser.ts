import { Forca, Materia, Destreza, Intelecto, Criatividade, Existencia, Ideia } from "./";

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
