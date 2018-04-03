import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Deslocamento } from '../../classes/ser/deslocamento';
import { GeraStringService, GeraValorMagService, GeraInteiroService } from './geral';

@Injectable()
export class GeraDeslocamentoService implements Gerador {

  get(seed: number):Deslocamento {
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();    
    var result = new Deslocamento();
    var tipos = ["Solo", "Ar", "Mar", "Espaço"];
    result.tipo = tipos[rng.getEntre(Math.random(), 0, tipos.length)];
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
