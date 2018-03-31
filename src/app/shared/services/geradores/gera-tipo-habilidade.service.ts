import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { TipoHabilidade } from '../../classes/ser/habilidades/tipo-habilidade';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraTipoHabilidadeService implements Gerador {

  get(seed: number):TipoHabilidade {
    var result = new TipoHabilidade();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    return result;
  }
  getLista(seed: number, quantidade: number): TipoHabilidade[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

}
