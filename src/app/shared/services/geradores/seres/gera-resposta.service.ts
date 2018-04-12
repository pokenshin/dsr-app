import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Resposta } from 'shared/core/ser/resposta';
import { GeraValorMagService } from 'shared/services/geradores/geral';

@Injectable()
export class GeraRespostaService implements Gerador {

  get(seed: number):Resposta {
    var result = new Resposta();
    var rvmg = new GeraValorMagService();
    result.bravura = rvmg.get(Math.random());
    result.coragem = rvmg.get(Math.random());
    result.desespero = rvmg.get(Math.random());
    result.heroismo = rvmg.get(Math.random());
    result.indiferenca = rvmg.get(Math.random());
    result.medo = rvmg.get(Math.random());
    result.panico = rvmg.get(Math.random());
    return result;
  }
  getLista(seed: number, quantidade: number): Resposta[] {
    var resultado = new Array<Resposta>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
