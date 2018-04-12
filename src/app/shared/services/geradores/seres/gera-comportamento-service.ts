import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Comportamento } from 'shared/core/ser/comportamento';
import { GeraInteiroService } from 'shared/services/geradores/geral';

@Injectable()
export class GeraComportamentoService implements Gerador {

  get(seed: number):Comportamento {
    var result = new Comportamento();
    var rng = new GeraInteiroService();
    result.apresentacao = rng.getEntre(Math.random(), 1, 99);
    result.concepcao = rng.getEntre(Math.random(), 1, 99);
    result.honra = rng.getEntre(Math.random(), 1, 99);
    result.moral = rng.getEntre(Math.random(), 1, 99);
    result.percepcao = rng.getEntre(Math.random(), 1, 99);
    result.personalidade = rng.getEntre(Math.random(), 1, 99);
    return result;
  }
  getLista(seed: number, quantidade: number): Comportamento[] {
    var resultado = new Array<Comportamento>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;   }
  constructor() { }

}
