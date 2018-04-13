import { ValorMag } from 'shared/core';
import { Energia } from "shared/core/energias";
import { Deslocamento } from './deslocamento'; 
import { Pericia } from './pericia';
import { Resposta } from './resposta';
import { Destino } from './destino';
import { Carisma } from './carisma';
import { Identidade } from './identidade';
import { Subatributos } from './subatributos';
import { Cerne } from './cerne';
import { Experiencia } from './experiencia';
import { Elo } from "./elo";
import { Modificador } from "./modificadores";
import { Elemento } from 'shared/core/ciencias/elementais';
import { Item, Equipamento } from "shared/core/itens";
import { AtributosSer } from "./atributos";
import { Arcanidade, Tecnica, Habilidade } from 'shared/core/ser/acao';

export class Ser {
    constructor(
        //identidade
        public identidade: Identidade = new Identidade(),
        //Atributos
        public atributos: AtributosSer = new AtributosSer(),
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
        //Habilidades, Técnicas, Arcanidades
        public habilidades: Habilidade[] = new Array<Habilidade>(),
        public arcanidades: Arcanidade[] = new Array<Arcanidade>(),
        public tecnicas: Tecnica[] = new Array<Tecnica>(),
        //Resposta
        public resposta: Resposta = new Resposta(),
        public forcaVontade: number = 0,
        public ira: number = 0,
        public poderMaximo: number = 0,
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