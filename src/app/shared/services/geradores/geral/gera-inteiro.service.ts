import { Injectable } from '@angular/core';
import { Gerador } from '../gerador';
import { GeradorNumero } from './gerador-numero';

@Injectable()
export class GeraInteiroService implements Gerador, GeradorNumero  {
  
  constructor() {
  }

  getEntre(seed: number, min: number, max: number) {
    return Math.floor(seed * (max - min + 1)) + min;
  }

  getListaEntre(seed: number, min: number, max: number, quantidade: number) {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.getEntre(seed, min, max));
    }
    return resultado;  
  }
  

  get(seed: number): number{
    return this.getEntre(seed, 0, 999999999);
  }

  getLista(seed: number, quantidade: number): number[]{
    return this.getListaEntre(seed, 0, 999999999, quantidade);
  }

}
