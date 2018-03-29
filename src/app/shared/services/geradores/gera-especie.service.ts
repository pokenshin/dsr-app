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
    

    
    
    
    
    throw new Error("Method not implemented.");
  }
  
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
