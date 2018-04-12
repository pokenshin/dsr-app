import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { GeraForcaService, GeraMateriaService, GeraDestrezaService, GeraIntelectoService, GeraCriatividadeService, GeraIdeiaService, GeraExistenciaService } from '.';
import { AtributosSer } from 'shared/core/ser/atributos';

@Injectable()
export class GeraAtributosService implements Gerador {

  get(seed: number):AtributosSer {
    var result = new AtributosSer();
    var gForca = new GeraForcaService();
    var gMateria = new GeraMateriaService();
    var gDestreza = new GeraDestrezaService();
    var gIntelecto = new GeraIntelectoService();
    var gCriatividade = new GeraCriatividadeService();
    var gIdeia = new GeraIdeiaService();
    var gExistencia = new GeraExistenciaService();
    
    result.forca = gForca.get(Math.random());
    result.materia = gMateria.get(Math.random());
    result.destreza = gDestreza.get(Math.random());
    result.intelecto = gIntelecto.get(Math.random());
    result.criatividade = gCriatividade.get(Math.random());
    result.ideia = gIdeia.get(Math.random());
    result.existencia = gExistencia.get(Math.random());

    return result;
  }
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
