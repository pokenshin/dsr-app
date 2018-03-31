import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Natureza } from '../../classes/ser/natureza';
import { GeraInteiroService } from './geral';

@Injectable()
export class GeraNaturezaService implements Gerador {

  get(seed: number):Natureza {
    var result = new Natureza();
    var rng = new GeraInteiroService();
    result.apresentacao = rng.getEntre(Math.random(), 1, 99);
    result.concepcao = rng.getEntre(Math.random(), 1, 99);
    result.honra = rng.getEntre(Math.random(), 1, 99);
    result.moral = rng.getEntre(Math.random(), 1, 99);
    result.percepcao = rng.getEntre(Math.random(), 1, 99);
    result.personalidade = rng.getEntre(Math.random(), 1, 99);
    return result;
  }
  getLista(seed: number, quantidade: number): Natureza[] {
    var resultado = new Array<Natureza>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;   }
  constructor() { }

}
