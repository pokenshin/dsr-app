import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { GeraAtributosService } from 'shared/services/geradores/atributos/gera-atributos.service';
import { Especie } from 'shared/core/ser/especie';
import { GeraInteiroService, GeraValorMagService, GeraStringService, GeraMinMaxService } from 'shared/services/geradores/geral';
import { CalculaNumeroService } from 'shared/services/calculadores/';
import { ValorMag, RangeValue } from 'shared/core';
import { GeraEnergiaService } from 'shared/services/geradores/energias';
import { GeraEsferaService } from 'shared/services/geradores/ciencias';
import { GeraHabilidadeService, GeraTecnicaService } from 'shared/services/geradores/acoes';
import { GeraDeslocamentoService } from 'shared/services/geradores/seres/gera-deslocamento.service';
import { GeraComportamentoService } from 'shared/services/geradores/seres/gera-comportamento-service';
import { GeraRespostaService } from 'shared/services/geradores/seres/gera-resposta.service';
import { GeraOrigemService } from 'shared/services/geradores/lugares';
import { GeraPericiaService } from 'shared/services/geradores/pericias';
import { Resposta } from 'shared/core/ser';
import { GeraTaxonomiaService } from 'shared/services/geradores/especies/gera-taxonomia.service';
import { GeraModificadorService } from 'shared/services/geradores/modificadores';
import { GeraElementaisService } from 'shared/services/geradores/elementais';
import { GeraArcanidadeService } from 'shared/services/geradores/acoes/gera-arcanidade.service';

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
    var gComportamento = new GeraComportamentoService();
    var gOrigem = new GeraOrigemService();
    var gPericia = new GeraPericiaService();
    var gResposta = new GeraRespostaService();
    var gTaxonomia = new GeraTaxonomiaService();
    var gModificador = new GeraModificadorService();
    var gElementais = new GeraElementaisService();
    var gTecnica = new GeraTecnicaService();
    var gArcanidade = new GeraArcanidadeService();


    result.acao = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Ação da espécie gerada: ' + result.acao );
    result.altura = gMinMax.getValorMag(Math.random());
    console.log('(GeraEspecieService.get) - Altura da espécie gerada: ' + result.altura);    
    result.atributos = new RangeValue(gAtributos.get(Math.random()),gAtributos.get(Math.random()));
    console.log('(GeraEspecieService.get) - Atributos da espécie gerada: ' + result.atributos);      
    result.cansaco = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Cansaço da espécie gerada: ' + result.cansaco);     
    //result.defeitosEspecie = 
    result.densidade = rvmg.get(Math.random());
    console.log('(GeraEspecieService.get) - Densidade da espécie gerada: ' + result.densidade);     
    result.deslocamentosMedios = gDeslocamento.getLista(Math.random(), 4);
    console.log('(GeraEspecieService.get) - Deslocamento da espécie gerada: ' + result.deslocamentosMedios);     
    result.destria = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Destrias da espécie gerada: ' + result.destria);     
    result.energias = gEnergia.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    console.log('(GeraEspecieService.get) - Energias da espécie gerada: ' + result.energias); 
    result.especial = rng.getEntre(Math.random(), 0, 70);
    console.log('(GeraEspecieService.get) - Especial da espécie gerada: ' + result.especial); 
    result.essencia = gEsfera.get(Math.random());
    console.log('(GeraEspecieService.get) - Essência da espécie gerada: ' + result.essencia); 
    result.fatorProgressao = rng.getEntre(Math.random(), 1, 10);
    console.log('(GeraEspecieService.get) - Fator de Progressão da espécie gerada: ' + result.fatorProgressao); 
    result.fe = gMinMax.getNumberMedio(Math.random());
    console.log('(GeraEspecieService.get) - Fé da espécie gerada: ' + result.fe); 
    result.forcaVontade = gMinMax.getNumberMedio(Math.random());
    console.log('(GeraEspecieService.get) - FV da espécie gerada: ' + result.forcaVontade); 
    result.fugacidade = gHabilidade.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    console.log('(GeraEspecieService.get) - fugacidade da espécie gerada: ' + result.fugacidade); 
    result.habilidades = gHabilidade.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    console.log('(GeraEspecieService.get) - Habilidades da espécie gerada: ' + result.habilidades);
    result.arcanidades =  gArcanidade.getLista(Math.random(), rng.getEntre(Math.random(), 0, 10));
    console.log('(GeraEspecieService.get) - Arcanidades da espécie gerada: ' + result.arcanidades);
    result.id = rng.getEntre(Math.random(), 1, 99999);
    console.log('(GeraEspecieService.get) - ID da espécie gerada: ' + result.id); 
    result.ira = gMinMax.getNumberMedio(Math.random());
    console.log('(GeraEspecieService.get) - Ira da espécie gerada: ' + result.ira); 
    result.karma = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Karma da espécie gerada: ' + result.karma); 
    result.ki = gMinMax.getNumberMedio(Math.random());
    console.log('(GeraEspecieService.get) - Ki da espécie gerada: ' + result.ki); 
    result.largura = gMinMax.getValorMag(Math.random());
    console.log('(GeraEspecieService.get) - Largura da espécie gerada: ' + result.largura); 
    result.magnitude = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Magnitude da espécie gerada: ' + result.magnitude); 
    result.maturidade = gMinMax.getValorMag(Math.random());
    console.log('(GeraEspecieService.get) - Maturidade da espécie gerada: ' + result.maturidade); 
    result.maxArmasEquipadas = rng.getEntre(Math.random(), 1, 10);
    console.log('(GeraEspecieService.get) - MaxArmasEquipadas da espécie gerada: ' + result.maxArmasEquipadas); 
    result.maxItensEquipados = rng.getEntre(Math.random(), 1, 20);
    console.log('(GeraEspecieService.get) - MaxItensEquipados da espécie gerada: ' + result.maxItensEquipados); 
    result.comportamento = gComportamento.get(Math.random());
    console.log('(GeraEspecieService.get) - Comportamento da espécie gerada: ' + result.comportamento); 
    result.nivel = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Nivel da espécie gerada: ' + result.nivel); 
    result.numeroReis = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Reis da espécie gerada: ' + result.numeroReis); 
    result.origem = gOrigem.get(Math.random());
    console.log('(GeraEspecieService.get) - Origem da espécie gerada: ' + result.origem); 
    result.origemPoder = 'Origem aleatória.';
    result.pericias = gPericia.getLista(Math.random(), rng.getEntre(Math.random(), 1, 20));
    console.log('(GeraEspecieService.get) - Pericias da espécie gerada: ' + result.pericias); 
    result.poderMaximo = gMinMax.getNumberMedio(Math.random());
    console.log('(GeraEspecieService.get) - PoderMaximo da espécie gerada: ' + result.poderMaximo); 
    result.resposta = new RangeValue<Resposta>(gResposta.get(Math.random()), gResposta.get(Math.random()));
    console.log('(GeraEspecieService.get) - Resposta da espécie gerada: ' + result.resposta); 
    result.taxonomia = gTaxonomia.get(Math.random());
    console.log('(GeraEspecieService.get) - Taxonomia da espécie gerada: ' + result.taxonomia); 
    result.tempo = gMinMax.getNumberMedio(Math.random());
    console.log('(GeraEspecieService.get) - Tempo da espécie gerada: ' + result.tempo); 
    result.trabalho = gMinMax.getNumberMedio(Math.random());
    console.log('(GeraEspecieService.get) - Trabalho da espécie gerada: ' + result.trabalho); 
    result.turno = gMinMax.getNumberPequeno(Math.random());
    console.log('(GeraEspecieService.get) - Turno da espécie gerada: ' + result.turno); 
    result.virtudesEspecie = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    console.log('(GeraEspecieService.get) - Virtudes da espécie gerada: ' + result.virtudesEspecie); 
    result.elementais = gElementais.get(Math.random());
    console.log('(GeraEspecieService.get) - Elementais da espécie gerada: ' + result.elementais); 
    result.estimulos = rsg.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    console.log('(GeraEspecieService.get) - Estímulos da espécie gerada: ' + result.estimulos); 
   
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
