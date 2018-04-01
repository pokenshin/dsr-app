import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { GeraCriatividadeService, GeraDestrezaService, GeraForcaService, GeraMateriaService, GeraIntelectoService, GeraIdeiaService, GeraExistenciaService } from './atributos';
import { Especie } from '../../classes/ser/especie';
import { GeraInteiroService, GeraValorMagService, GeraStringService } from './geral';
import { CalculaNumeroService } from '../calculadores/calcula-numero.service';
import { ValorMag } from '../../classes/valormag';
import { GeraMinMaxService } from './geral/gera-min-max.service';
import { GeraAtributosService } from './atributos/gera-atributos.service';
import { RangeValue } from '../../classes/ser/range-value';
import { GeraDeslocamentoService } from './gera-deslocamento.service';
import { GeraEnergiaService } from './gera-energia.service';
import { GeraEsferaService } from './gera-esfera.service';
import { GeraHabilidadeService } from './gera-habilidade.service';
import { GeraNaturezaService } from './gera-natureza.service';
import { GeraOrigemService } from './gera-origem.service';
import { GeraPericiaService } from './gera-pericia.service';
import { Resposta } from '../../classes/ser/resposta';
import { GeraRespostaService } from './gera-resposta.service';
import { GeraTaxonomiaService } from './gera-taxonomia.service';
import { GeraModificadorService } from './gera-modificador.service';
import { GeraElementaisService } from './gera-elementais.service';

@Injectable()
export class GeraEspecieService implements Gerador {
  get(seed: number):Especie {
    var result = new Especie();
    //Calculadores
    var calculador = new CalculaNumeroService();
    //Geradores de número
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    //Gerador de string
    var rsg = new GeraStringService();
    //Geradores Identidade
    //var gerOrigem = new GeraOrigemService();
    //Geradores Atributos
    var gAtributos = new GeraAtributosService();
    var gMinMax = new GeraMinMaxService();
    var gDeslocamento = new GeraDeslocamentoService();
    var gEnergia = new GeraEnergiaService();
    var gEsfera = new GeraEsferaService();
    var gHabilidade = new GeraHabilidadeService();
    var gNatureza = new GeraNaturezaService();
    var gOrigem = new GeraOrigemService();
    var gPericia = new GeraPericiaService();
    var gResposta = new GeraRespostaService();
    var gTaxonomia = new GeraTaxonomiaService();
    var gModificador = new GeraModificadorService();
    var gElementais = new GeraElementaisService();

    result.acao = gMinMax.getNumberPequeno(Math.random());
    result.altura = gMinMax.getValorMag(Math.random());
    result.atributos = new RangeValue(gAtributos.get(Math.random()),gAtributos.get(Math.random()));
    result.cansaco = gMinMax.getNumberPequeno(Math.random());
    //result.defeitosEspecie = 
    result.densidade = rvmg.get(Math.random());
    result.deslocamentosMedios = gDeslocamento.getLista(Math.random(), 4);
    result.destria = gMinMax.getNumberPequeno(Math.random());
    result.energias = gEnergia.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    result.especial = rng.getEntre(Math.random(), 0, 70);
    result.essencia = gEsfera.get(Math.random());
    result.fatorProgressao = rng.getEntre(Math.random(), 1, 10);
    result.fe = gMinMax.getNumberMedio(Math.random());
    result.forcaVontade = gMinMax.getNumberMedio(Math.random());
    result.fugacidade = gHabilidade.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    result.habilidades = gHabilidade.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.id = rng.getEntre(Math.random(), 1, 99999);
    result.ira = gMinMax.getNumberMedio(Math.random());
    result.karma = gMinMax.getNumberPequeno(Math.random());
    result.ki = gMinMax.getNumberMedio(Math.random());
    result.largura = gMinMax.getValorMag(Math.random());
    result.magnitude = gMinMax.getNumberPequeno(Math.random());
    result.maturidade = gMinMax.getValorMag(Math.random());
    result.maxArmasEquipadas = rng.getEntre(Math.random(), 1, 10);
    result.maxItensEquipados = rng.getEntre(Math.random(), 1, 20);
    result.natureza = gNatureza.get(Math.random());
    result.nivel = gMinMax.getNumberPequeno(Math.random());
    result.numeroReis = gMinMax.getNumberPequeno(Math.random());
    result.origem = gOrigem.get(Math.random());
    result.origemPoder = 'Origem aleatória.';
    result.pericias = gPericia.getLista(Math.random(), rng.getEntre(Math.random(), 1, 20));
    result.poderMaximo = gMinMax.getNumberMedio(Math.random());
    result.resposta = new RangeValue<Resposta>(gResposta.get(Math.random()), gResposta.get(Math.random()));
    result.taxonomia = gTaxonomia.get(Math.random());
    result.tempo = gMinMax.getNumberMedio(Math.random());
    result.trabalho = gMinMax.getNumberMedio(Math.random());
    result.turno = gMinMax.getNumberPequeno(Math.random());
    result.virtudesEspecie = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.elementais = gElementais.get(Math.random());
    
    return result;
  }
  
  getLista(seed: number, quantidade: number): Especie[] {
    var resultado = new Array<Especie>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado; 
   }
  constructor() { }

}
