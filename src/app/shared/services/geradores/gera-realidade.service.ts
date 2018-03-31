import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Realidade } from '../../classes/lugares/realidade';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraRealidadeService implements Gerador {

  get(seed: number):Realidade {
    var result = new Realidade();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    return result;
  }
  getLista(seed: number, quantidade: number): Realidade[] {
    var resultado = new Array<Realidade>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
