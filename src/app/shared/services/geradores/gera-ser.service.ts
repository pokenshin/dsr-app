import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Ser } from '../..';
import { GeraAtributosService } from './atributos/gera-atributos.service';
import { GeraModificadorService } from './gera-modificador.service';
import { GeraInteiroService } from './geral';
import { GeraIdentidadeService } from './gera-identidade.service';

@Injectable()
export class GeraSerService implements Gerador {

  get(seed: number):Ser {
    var result = new Ser();
    var gAtributos = new GeraAtributosService();
    var gModificador = new GeraModificadorService();
    var gIdentidade = new GeraIdentidadeService();
    var rng = new GeraInteiroService();
    
    result.atributos = gAtributos.get(Math.random());
    result.defeitos = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.dons = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.identidade = gIdentidade.get(Math.random());
    

    return result;

  }
  getLista(seed: number, quantidade: number): Ser[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
