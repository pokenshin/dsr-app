import { Injectable } from '@angular/core';
import { Gerador } from './gerador';

@Injectable()
export class GeraBooleanService implements Gerador {

  get(seed: number) {
    return (Math.random() > 0.5);
  }

  getLista(seed: number, quantidade: number): any[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }

  getComChance(seed:number, chanceTrue:number){
    return (Math.random() < chanceTrue);
  }

  constructor() { }

}
