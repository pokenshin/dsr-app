import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Origem } from '../../classes/lugares/origem';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraOrigemService implements Gerador {

  get(seed: number):Origem {
    var result = new Origem();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.plano 

    return result
    
  }
  getLista(seed: number, quantidade: number): Origem[] {
    var resultado = new Array<Origem>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
