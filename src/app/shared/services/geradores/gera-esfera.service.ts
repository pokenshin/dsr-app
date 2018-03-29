import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Esfera } from '../../classes/ciencias/esfera';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraEsferaService implements Gerador {

  get(seed: number):Esfera {
    var result = new Esfera();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);

    return result;
  }
  getLista(seed: number, quantidade: number): Esfera[] {
    var resultado = new Array<Esfera>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

}
