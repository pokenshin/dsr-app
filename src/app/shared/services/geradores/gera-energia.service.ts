import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Energia } from '../../classes/energias/energia';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraEnergiaService implements Gerador {

  get(seed: number):Energia {
    var result = new Energia();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.id = rng.getEntre(Math.random(), 1, 10);
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3,10);
    result.sigla = rsg.getTamanhoEspecifico(Math.random(), 2,2);
    result.quantidade = rng.get(Math.random());
    return result;
  }
  getLista(seed: number, quantidade: number): Energia[] {
    var resultado = new Array<Energia>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;    
  }
  constructor() { }

}
