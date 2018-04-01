import { Injectable } from '@angular/core';
import { GeraValorMagService, GeraBooleanService } from './geral';
import { ValorMag } from '../..';
import { Gerador } from './gerador';
import { Elementais } from '../../classes/ser/elementais';

@Injectable()
export class GeraElementaisService implements Gerador {

  get(seed: number):Elementais {
    return this.setaPositivoNegativo(new Elementais());
  }
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }

  private setaPositivoNegativo(elementais:Elementais): Elementais{
    var rvmg = new GeraValorMagService();
    var rbg = new GeraBooleanService();
    Object.keys(elementais).forEach(function(key){ 
      if (rbg.getComChance(Math.random(), 0.7)){
        if (rbg.get(Math.random())){
          elementais[key].valorPositivo = rvmg.getEntre(Math.random(), new ValorMag(0,0), new ValorMag(99, 10));
          elementais[key].valorNegativo = new ValorMag(0,0);
        }else{
          elementais[key].valorPositivo = new ValorMag(0,0);
          elementais[key].valorNegativo = rvmg.getEntre(Math.random(), new ValorMag(0,0), new ValorMag(99, 10));
        }
      } else {
        elementais[key].valorPositivo = new ValorMag(0,0);        
        elementais[key].valorNegativo = new ValorMag(0,0);        
      }


    });
    return elementais;
  }
  constructor(

  ) { }

}
