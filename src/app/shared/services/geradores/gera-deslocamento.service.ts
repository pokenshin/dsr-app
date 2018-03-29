import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Deslocamento } from '../../classes/ser/deslocamento';
import { GeraStringService, GeraValorMagService } from './geral';

@Injectable()
export class GeraDeslocamentoService implements Gerador {

  get(seed: number):Deslocamento {
    var rsg = new GeraStringService();
    var rvmg = new GeraValorMagService();    
    var result = new Deslocamento();
    result.tipo = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.valor = rvmg.get(Math.random());
    return result;
  }

  getLista(seed: number, quantidade: number): Deslocamento[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;    
  }
  constructor() { }

}
