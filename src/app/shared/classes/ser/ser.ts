import { ValorMag } from "../valormag";
import { Energia } from "../energias/energia";
import { Deslocamento } from "./deslocamento";
import { Pericia } from "./pericia";
import { Habilidade } from "./habilidades/habilidade";
import { Resposta } from "./resposta";
import { Modificador } from "./modificadores/modificador";
import { Elemento } from "../ciencias/elementais/elemento";
import { Item } from "../itens/item";
import { Equipamento } from "../itens/equipamento";
import { Destino } from "./destino";
import { Carisma } from "./carisma";
import { Identidade } from "./identidade";
import { Atributos } from "./atributos";
import { Subatributos } from "./subatributos";
import { Cerne } from "./cerne";
import { Experiencia } from "./experiencia";
import { Elo } from "./elo";

export class Ser {
    constructor(
        //identidade
        public identidade: Identidade = new Identidade(),
        //Atributos
        public atributos: Atributos = new Atributos(),
        //Energias
        public energias: Energia[] = new Array<Energia>(),
        //Destino - Especial - Carisma
        public especial: number = 0,
        //Deslocamentos
        public deslocamentos: Deslocamento[] = new Array<Deslocamento>(),
        //Subatributos
        public subatributos: Subatributos = new Subatributos(),
        //Cerne
        public cerne: Cerne = new Cerne(),
        //Pericias
        public pericias: Pericia[] = new Array<Pericia>(),
        //Fugacidade
        public fugacidade: Habilidade[] = new Array<Habilidade>(),
        //Habilidades
        public habilidades: Habilidade[] = new Array<Habilidade>(),
        //Resposta
        public resposta: Resposta = new Resposta(),
        public forcaVontade: ValorMag = new ValorMag(),
        public ira: ValorMag = new ValorMag(),
        public poderMaximo: ValorMag = new ValorMag(),
        //Dons e Defeitos
        public dons: Modificador[] = new Array<Modificador>(),
        public defeitos: Modificador[] = new Array<Modificador>(),
        //Estimulos
        public estimulos: string[] = new Array<string>(),
        //Elementais
        public elementais: Elemento[] = new Array<Elemento>(),
        //Experiência
        public experiencia: Experiencia = new Experiencia(),
        //Equipamento
        public itensEquipados: Equipamento[] = new Array<Equipamento>(),
        public posses: Item[] = new Array<Item>(),
        //Elo
        public elo: Elo = new Elo(),
        //Modificadores Ativos
        public modificadoresAtivos: Modificador[] = new Array<Modificador>()
    ){
        //do something
    }    
}