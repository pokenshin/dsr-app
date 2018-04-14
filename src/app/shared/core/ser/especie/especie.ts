import { Origem } from "shared/core/lugares";
import { Esfera } from "shared/core/ciencias";
import { Energia } from "shared/core/energias";
import { Forca, Materia, Destreza, Intelecto, Criatividade, Existencia, Ideia } from "shared/core/ser/atributos";
import { Pericia, Comportamento, Resposta, Deslocamento, ElementaisSer } from "shared/core/ser";
import { Habilidade, Arcanidade, Tecnica } from "shared/core/ser/acao";
import { Modificador } from "shared/core/ser/modificadores";
import { ValorMag, RangeValue } from 'shared/core';
import { Taxonomia } from "./taxonomia";
import { AtributosSer } from "shared/core/ser/atributos";
import { Elemento } from 'shared/core/ciencias/elementais';

export class Especie {
    constructor(
        public id: number = 0,
        //Taxonomia
        public taxonomia: Taxonomia = new Taxonomia(),
        //Identidade
        public origem: Origem = new Origem(),
        public magnitude: RangeValue<number> = new RangeValue(0,0),
        public numeroReis: RangeValue<number> = new RangeValue(0,0),
        public ki: RangeValue<number> = new RangeValue(0,0),
        public nivel: RangeValue<number> = new RangeValue(0,0),
        public tempo: RangeValue<number> = new RangeValue(0,0),
        public essencia: Esfera = new Esfera(),
        public energias: Energia[] = new Array<Energia>(),
        //Atributos
        public atributos: RangeValue<AtributosSer> = new RangeValue(new AtributosSer(), new AtributosSer()),
        public pericias: Pericia[] = new Array<Pericia>(),
        public habilidades: Habilidade[] = new Array<Habilidade>(),
        public arcanidades: Arcanidade[] = new Array<Arcanidade>(),
        // Poder / Virtudes / Defeitos
        public origemPoder: string = '',
        public virtudesEspecie: Modificador[] = new Array<Modificador>(),
        public defeitosEspecie: Modificador[] = new Array<Modificador>(),
        //Força de vontade / Ira / Poder Máximo
        public forcaVontade: RangeValue<number> = new RangeValue(0,0),
        public ira: RangeValue<number> = new RangeValue(0,0),
        public poderMaximo: RangeValue<number> = new RangeValue(0,0),
        //Fator de progressão de EXP
        public fatorProgressao: number = 0,
        //Cansaço Fé Karma
        public cansaco: RangeValue<number> = new RangeValue(0,0),
        public fe: RangeValue<number> = new RangeValue(0,0),
        public karma: RangeValue<number> = new RangeValue(0,0),
        //Itens
        public maxItensEquipados: number = 0,
        public maxArmasEquipadas: number = 0,
        public acao: RangeValue<number> = new RangeValue(0,0),
        public turno: RangeValue<number> = new RangeValue(0,0),
        public altura: RangeValue<ValorMag> = new RangeValue(new ValorMag(),new ValorMag()),
        public maturidade: RangeValue<ValorMag> = new RangeValue(new ValorMag(),new ValorMag()),
        //Dominância da raça sobre outras
        public porcentagemDominancia: number = 0,
        //Subatributos
        public destria: RangeValue<number> = new RangeValue(0,0),
        public trabalho: RangeValue<number> = new RangeValue(0,0),
        public densidade: ValorMag = new ValorMag(),
        public largura: RangeValue<ValorMag> = new RangeValue(new ValorMag(), new ValorMag()),
        public especial: number = 0,
        public comportamento: Comportamento = new Comportamento(),
        public resposta: RangeValue<Resposta> = new RangeValue(new Resposta(), new Resposta()),
        public fugacidade: Habilidade[] = new Array<Habilidade>(),
        public deslocamentosMedios: Deslocamento[] = new Array<Deslocamento>(),
        //Elementais
        public elementais: ElementaisSer = new ElementaisSer(),
        //Estímulos
        public estimulos: string[] = new Array<string>()
    ){}
    
}
