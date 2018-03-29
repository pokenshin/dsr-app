import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { GeraCriatividadeService, GeraDestrezaService, GeraForcaService, GeraMateriaService, GeraIntelectoService, GeraIdeiaService, GeraExistenciaService } from './atributos';
import { Especie } from '../../classes/ser/especie';
import { GeraInteiroService, GeraValorMagService, GeraStringService } from './geral';
import { CalculaNumeroService } from '../calculadores/calcula-numero.service';
import { ValorMag } from '../../classes/valormag';

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
    var gerCriatividade = new GeraCriatividadeService();
    var gerDestreza = new GeraDestrezaService();
    var gerForca = new GeraForcaService();
    var gerMateria = new GeraMateriaService();
    var gerIntelecto = new GeraIntelectoService();
    var gerIdeia = new GeraIdeiaService();
    var gerExistencia = new GeraExistenciaService();

    result.acao.min = rng.getEntre(Math.random(), 1, 10);
    result.acao.max = result.acao.min + rng.getEntre(Math.random(), 1, 10);
    //result.defeitosEspecie = gerModificador.getListaComOrigem();

    
    
    
    throw new Error("Method not implemented.");
  }
  
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
