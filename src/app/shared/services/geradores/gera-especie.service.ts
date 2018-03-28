import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { GeraCriatividadeService } from './gera-criatividade.service';
import { GeraDestrezaService } from './gera-destreza.service';
import { GeraForcaService } from './gera-forca.service';
import { GeraMateriaService } from './gera-materia.service';
import { GeraIntelectoService } from './gera-intelecto.service';
import { GeraIdeiaService } from './gera-ideia.service';
import { GeraExistenciaService } from './gera-existencia.service';
import { Especie } from '../../classes/identidade/especie';
import { GeraInteiroService } from './gera-inteiro.service';
import { GeraValorMagService } from './gera-valor-mag.service';
import { CalculaNumeroService } from '../calculadores/calcula-numero.service';
import { ValorMag } from '../..';
import { GeraStringService } from './gera-string.service';

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
    
    result.acaoMin = rng.getEntre(Math.random(), 1, 50);
    result.acaoMax = result.acaoMin + rng.getEntre(Math.random(), 1, 50);
    result.alturaMin = rvmg.getEntre(Math.random(), new ValorMag(1,1), new ValorMag(99,5));
    result.alturaMax = rvmg.getEntre(Math.random(), new ValorMag(1,1), new ValorMag(99,5));
    result.alturaMax = calculador.somaValorMag(result.alturaMax, rvmg.getEntre(Math.random(), new ValorMag(1,1), new ValorMag(99,5)));
    result.cansacoMax = rng.getEntre(Math.random(), 0, 1000);
    result.classeTaxo = rsg.getTamanhoEspecifico(Math.random(), 3, 8);
    result.criatividadeMin = gerCriatividade.get(Math.random());
    result.criatividadeMax = gerCriatividade.get(Math.random());
    //result.defeitosEspecie = gerModificador.getListaComOrigem();

    
    
    
    throw new Error("Method not implemented.");
  }
  
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
