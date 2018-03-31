import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Plano } from '../../classes/lugares/plano';
import { GeraInteiroService, GeraStringService } from './geral';
import { GeraRealidadeService } from './gera-realidade.service';

@Injectable()
export class GeraPlanoService implements Gerador {
  
  get(seed: number):Plano {
    var result = new Plano();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    var gRealidade = new GeraRealidadeService();
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.realidade = gRealidade.get(Math.random());
    return result;
  }
  getLista(seed: number, quantidade: number): Plano[] {
    var resultado = new Array<Plano>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
