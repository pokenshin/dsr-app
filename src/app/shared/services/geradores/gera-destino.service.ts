import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Destino } from '../../classes/ser/destino';
import { GeraInteiroService } from './geral';

@Injectable()
export class GeraDestinoService implements Gerador {

  get(seed: number):Destino {
    var result = new Destino();
    var rng = new GeraInteiroService();

    result.acaso = rng.getEntre(Math.random(), 0, 99);
    result.azar = rng.getEntre(Math.random(), 0, 99);
    result.desgraca = rng.getEntre(Math.random(), 0, 99);
    result.milagre = rng.getEntre(Math.random(), 0, 99);
    result.sorte = rng.getEntre(Math.random(), 0, 99);

    return result;
  }
  getLista(seed: number, quantidade: number): Destino[] {
    var resultado = new Array<Destino>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
