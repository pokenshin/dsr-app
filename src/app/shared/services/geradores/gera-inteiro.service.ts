import { Injectable } from '@angular/core';

@Injectable()
export class GeraInteiroService {
  constructor() { 
  }

 /**
 * gera um numero inteiro aleatorio entre min e max
 * @param {Number} min 
 * @param {Number} max
 * @return {Number} random generated integer 
 */
  get(seed: number, min: number, max: number): number{
    return Math.floor(seed * (max - min + 1)) + min;
  }

}
