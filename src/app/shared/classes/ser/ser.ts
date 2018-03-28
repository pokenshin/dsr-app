import { ValorMag } from "../valormag";

import { Evolucao } from "./evolucao";
import { Energia } from "../energias/energia";
import { Deslocamento } from "./deslocamento";
import { Pericia } from "./pericia";
import { Habilidade } from "./habilidades/habilidade";
import { Resposta } from "./resposta";
import { Modificador } from "./modificadores/modificador";
import { Elemento } from "../ciencias/elementais/elemento";
import { Resistencia } from "./resistencia";
import { Item } from "../itens/item";
import { Equipamento } from "../itens/equipamento";
import { Destino } from "./destino";
import { Carisma } from "./carisma";
import { Identidade } from "./identidade";
import { Atributos } from "./atributos";

export class Ser {
    constructor(
        //identidade
        public identidade?: Identidade,
        //Atributos
        public atributo?: Atributos,
        //Evolução dos Atributos
        public evolucaoForca?: Evolucao,
        public evolucaoMateria?: Evolucao,
        public evolucaoDestreza?: Evolucao,
        public evolucaoIntelecto?: Evolucao,
        public evolucaoCriatividade?: Evolucao,
        public evolucaoExistencia?: Evolucao,
        public evolucaoIdeia?: Evolucao,
        //Energias
        public energias?: Energia[],
        //Destino - Especial - Carisma
        public especial?: number,
        //Deslocamentos
        public deslocamentos?: Deslocamento[],
        //Subatributos
        public instinto?: ValorMag,
        public raciocinio?: ValorMag,
        public subconsciencia?: ValorMag,
        public autocontrole?: ValorMag,
        public anatomia?: ValorMag,
        public animo?: ValorMag,
        public movimento?: ValorMag,
        public precisao?: ValorMag,
        public bonusHP?: ValorMag,
        public bonusMP?: ValorMag,
        public bonusCP?: ValorMag,
        public bonusSP?: ValorMag,
        //Cerne
        public iniciativa?: ValorMag,
        public acao?: ValorMag,
        public reacao?: ValorMag,
        public turno?: ValorMag,
        public destria?: ValorMag,
        public altura?: ValorMag,
        public largura?: ValorMag,
        public comprimento?: ValorMag,
        public carga?: ValorMag,
        public massa?: ValorMag,
        public tenacidade?: ValorMag,
        public essencia?: ValorMag,
        //Pericias
        public pericias?: Pericia[],
        //Fugacidade
        public fugacidade?: Habilidade[],
        //Habilidades
        public habilidades?: Habilidade[],
        //Resposta
        public resposta?: Resposta,
        public forcaVontade?: ValorMag,
        public ira?: ValorMag,
        public poderMaximo?: ValorMag,
        //Dons e Defeitos
        public dons?: Modificador[],
        public defeitos?: Modificador[],
        //Resistências
        public resistencias?: Resistencia[],
        //Estimulos
        public estimulos?: string[],
        //Elementais
        public elementais?: Elemento[],
        //Experiência
        public pontosGraduacao?: number,
        public pontosEvolucao?: number,
        public experienciaAtual?: number,
        //Equipamento
        public itensEquipados?: Equipamento[],
        public posses?: Item[],
        //Elo
        public cansacoAtual?: number,
        public cansacoMax?: number,
        public genese?: number,
        public geracao?: number,
        public fe?: number,
        public karma?: number,
        public destino?: Destino,
        public carisma?: Carisma,
        public alma?: string[],
        public eloDivino?: string,
        public trajetoria?: string,
        public idumentaria?: string,
        //Modificadores Ativos
        public modificadoresAtivos?: Modificador[]
    ){
        //do something
    }    
}