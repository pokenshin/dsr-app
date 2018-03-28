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

@Injectable()
export class GeraEspecieService implements Gerador {
  get(seed: number) {
    var result = new Especie();
    //Geradores de número
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    
    //Identidade
    //var gerOrigem = new GeraOrigemService();
    //Atributos
    var gerCriatividade = new GeraCriatividadeService();
    var gerDestreza = new GeraDestrezaService();
    var gerForca = new GeraForcaService();
    var gerMateria = new GeraMateriaService();
    var gerIntelecto = new GeraIntelectoService();
    var gerIdeia = new GeraIdeiaService();
    var gerExistencia = new GeraExistenciaService();
    
    result.acaoMin = rng.getEntre(Math.random(), 1, 50);
    result.acaoMax = result.acaoMin + rng.getEntre(Math.random(), 1, 50);
    

    
    
    
    throw new Error("Method not implemented.");
  }
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
