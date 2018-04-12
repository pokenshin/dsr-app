import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Esfera } from 'shared/core/ciencias';
import { GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';

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
