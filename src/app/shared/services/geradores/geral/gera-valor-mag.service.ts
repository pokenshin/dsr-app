import { Injectable } from '@angular/core';
import { Gerador } from '../gerador';
import { GeradorNumero } from './gerador-numero';
import { ValorMag } from '../../../classes/valormag';
import { GeraInteiroService } from './gera-inteiro.service'

@Injectable()
export class GeraValorMagService implements Gerador, GeradorNumero {
  private rng: GeraInteiroService;
  constructor() { }

  get(seed: number):ValorMag {
    return this.getEntre(seed, new ValorMag(1,1), new ValorMag(99,20));
  }
  
  getLista(seed: number, quantidade: number): ValorMag[] {
    return this.getListaEntre(seed, new ValorMag(), new ValorMag(99,20), quantidade);
  }
  
  getEntre(seed: number, min: ValorMag, max: ValorMag):ValorMag {
    this.rng = new GeraInteiroService();
    var valor = 1;
    var mag = this.rng.getEntre(seed, min.magnitude, max.magnitude);

    if (mag == min.magnitude){
      if (mag == max.magnitude){
        valor = this.rng.getEntre(seed, min.valor, max.valor);
      }else
        valor = this.rng.getEntre(seed, min.valor, 99);
    }else if (mag == max.magnitude){
      valor = this.rng.getEntre(seed, 10, max.valor);
    }else{
      valor = this.rng.getEntre(seed, 10, 99);
    }

    return new ValorMag(valor, mag);
  }
  
  getListaEntre(seed: number, min: ValorMag, max: ValorMag, quantidade: number):ValorMag[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.getEntre(seed, min, max));
    }
    return resultado;  
  }
}
