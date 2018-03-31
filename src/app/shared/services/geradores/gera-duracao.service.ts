import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { DuracaoEfeito } from '../../classes/efeitos/duracao-efeito';
import { GeraStringService, GeraValorMagService } from './geral';

@Injectable()
export class GeraDuracaoService implements Gerador {

  get(seed: number):DuracaoEfeito {
    var result = new DuracaoEfeito();
    var rsg = new GeraStringService();
    var rsvmg = new GeraValorMagService();
    result.tipoDuracao = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.unidadeDuracao = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.valorDuracao = rsvmg.get(Math.random());
    return result;
  }

  getLista(seed: number, quantidade: number): DuracaoEfeito[] {
    var resultado = new Array<DuracaoEfeito>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }

  constructor(){}

}
