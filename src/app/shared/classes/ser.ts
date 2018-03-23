import { ValorMag } from ".";
import { Origem } from "./lugares/origem";
import { Especie } from "./identidade/especie";
import { Classe } from "./ciencias/classe";
import { Indole } from "./identidade/indole";
import { Rei } from "./identidade/rei";
import { Forca } from "./atributos/forca";
import { Materia } from "./atributos/materia";
import { Destreza } from "./atributos/destreza";
import { Intelecto } from "./atributos/intelecto";
import { Criatividade } from "./atributos/criatividade";
import { Existencia } from "./atributos/existencia";
import { Ideia } from "./atributos/ideia";
import { Evolucao } from "./identidade/evolucao";
import { Energia } from "./energias/energia";
import { Deslocamento } from "./identidade/deslocamento";

export class Ser {
    //Identidade
    nome: string;
    origem: Origem;
    corpo: number;
    especies: Especie[];
    classes: Classe[];
    natureza: string;
    indole: Indole;
    magnitude: number;
    reis: Rei[];
    ki: number;
    nivel: number;
    //Atributos
    forca: Forca;
    materia: Materia;
    destreza: Destreza;
    intelecto: Intelecto;
    criatividade: Criatividade;
    existencia: Existencia;
    ideia: Ideia;
    //Evolução dos Atributos
    evolucaoForca: Evolucao;
    evolucaoMateria: Evolucao;
    evolucaoDestreza: Evolucao;
    evolucaoIntelecto: Evolucao;
    evolucaoCriatividade: Evolucao;
    evolucaoExistencia: Evolucao;
    evolucaoIdeia: Evolucao;
    //Energias
    energias: Energia[];
    //Destino - Especial - Carisma
    especial: number;
    //Deslocamentos
    deslocamentos: Deslocamento[];
    //Subatributos
    instinto: ValorMag;
    raciocinio: ValorMag;
    subconsciencia: ValorMag;
    autocontrole: ValorMag;
    anatomia: ValorMag;
    animo: ValorMag;
    movimento: ValorMag;
    precisao: ValorMag;
    bonusHP: ValorMag;
    bonusMP: ValorMag;
    bonusCP: ValorMag;
    bonusSP: ValorMag;
    //Cerne
    iniciativa: ValorMag;
    acao: ValorMag;
    reacao: ValorMag;
    turno: ValorMag;
    destria: ValorMag;
    altura: ValorMag;
    largura: ValorMag;
    comprimento: ValorMag;
    carga: ValorMag;
    massa: ValorMag;
    tenacidade: ValorMag;
    essencia: ValorMag;
}