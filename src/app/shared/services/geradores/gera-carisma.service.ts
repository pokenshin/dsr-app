import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Carisma } from '../../classes/ser/carisma';
import { GeraInteiroService } from './geral';

@Injectable()
export class GeraCarismaService implements Gerador {

  get(seed: number):Carisma {
    var result = new Carisma();
    var rng = new GeraInteiroService();
    
    result.negativo = rng.getEntre(Math.random(), 0, 99);
    result.neutro = rng.getEntre(Math.random(), 0, 99);
    result.positivo = rng.getEntre(Math.random(), 0, 99);

    return result;
  }
  getLista(seed: number, quantidade: number): Carisma[] {
    var resultado = new Array<Carisma>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
