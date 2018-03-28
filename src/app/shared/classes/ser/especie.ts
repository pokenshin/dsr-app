import { Origem } from "../lugares/origem";
import { Esfera } from "../ciencias/esfera";
import { Energia } from "../energias/energia";
import { Forca } from "../atributos/forca";
import { Materia } from "../atributos/materia";
import { Destreza } from "../atributos/destreza";
import { Intelecto } from "../atributos/intelecto";
import { Criatividade } from "../atributos/criatividade";
import { Existencia } from "../atributos/existencia";
import { Ideia } from "../atributos/ideia";
import { Pericia } from "../ciencias/pericia";
import { Habilidade } from "../ciencias/habilidade";
import { Modificador } from "../modificadores/modificador";
import { ValorMag } from "../..";
import { Natureza } from "./natureza";
import { Resposta } from "./resposta";
import { Deslocamento } from "./deslocamento";

export class Especie {
    id: number;
    reinoTaxo: string;
    filoTaxo: string;
    classeTaxo: string;
    ordemTaxo: string;
    familiaTaxo: string;
    generoTaxo: string;
    nomeCientifico: string;
    nomePopular: string;
    //Idenntidade
    origemEspecie: Origem;
    subClassificaoes: string[];
    magnitudeMin: number;
    magnitudeMax: number;
    reiMin: number;
    reiMax: number;
    kiMin: number;
    kiMax: number;
    nivelMin: number;
    nivelMax: number;
    tempoMax: number;
    //Essência
    essencia: Esfera;
    //Lista de energias
    energias: Energia[];
    //Atributos Minimos
    forcaMin: Forca;
    materiaMin: Materia;
    destrezaMin: Destreza;
    intelectoMin: Intelecto;
    criatividadeMin: Criatividade;
    existenciaMin: Existencia;
    ideiaMin: Ideia;
    //Atributos Máximos
    forcaMax: Forca;
    materiaMax: Materia;
    destrezaMax: Destreza;
    intelectoMax: Intelecto;
    criatividadeMax: Criatividade;
    existenciaMax: Existencia;
    ideiaMax: Ideia;
    // Pericias e Habilidades
    periciasEspecie: Pericia[];
    habilidadesEspecie: Habilidade[];
    // Poder / Virtudes / Dons / Vantagens / Desvantagens
    origemPoder: string;
    virtudesEspecie: Modificador[];
    defeitosEspecie: Modificador[];
    //Força de vontade / Ira / Poder Máximo
    forcaVontadeMin: number;
    forcaVontadeMax: number;
    iraMin: number;
    iraMax: number;
    poderMaximoMin: number;
    poderMaximoMax: number;
    //Fator de progressão de EXP
    fatorProgressao: number;
    //Cansaço Fé Karma
    cansacoMax: number;
    feMin: number;
    feMax: number;
    karmaMin: number;
    karmaMax: number;
    //Itens
    maxItensEquipados: number;
    maxArmasEquipadas: number;
    acaoMin: number;
    acaoMax: number;
    turnoMin: number;
    turnoMax: number;
    alturaMin: ValorMag;
    alturaMax: ValorMag;
    maturidadeMin: ValorMag;
    maturidadeMax: ValorMag;
    //Dominância da raça sobre outras
    porcentagemDominancia: number;
    destriaMin: number;
    destriaMax: number;
    trabalhoMin: number;
    trabalhoMax: number;
    densidade: ValorMag;
    larguraMin: ValorMag;
    larguraMax: ValorMag;
    especial: number;
    natureza: Natureza;
    respostaMin: Resposta;
    respostaMax: Resposta;
    fugacidade: Habilidade[];
    deslocamentosMedios: Deslocamento[];
}
