import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { GeraInteiroService } from './gera-inteiro.service';
import { GeraBooleanService } from './gera-boolean.service';
import { GeraStringService } from './gera-string.service';
import { GeraValorMagService } from './gera-valor-mag.service';
import { Existencia } from '../../classes/ser/atributos/existencia';
import { ValorMag } from '../..';

@Injectable()
export class GeraExistenciaService implements Gerador {

  private rng: GeraInteiroService;
  private rbg: GeraBooleanService;
  private rsg: GeraStringService;
  private rvmg: GeraValorMagService;

  get(seed: number): Existencia {
    var result = new Existencia();
    this.rng = new GeraInteiroService();
    this.rsg = new GeraStringService();
    this.rvmg = new GeraValorMagService();
    var min = new ValorMag(10, 1);
    var max = new ValorMag(99, 15);

    result.bonusCP = this.rng.getEntre(Math.random(), 1, 9999);
    result.classe = this.rsg.getTamanhoEspecifico(Math.random(), 1,1);
    result.nivel = this.rng.getEntre(Math.random(), 1, 5);
    result.pontos = this.rng.getEntre(Math.random(), 1, 9999);
    result.porcentagem = this.rvmg.getEntre(Math.random(), min, max);
    result.conhecimento = this.rvmg.getEntre(Math.random(), min, max);
    result.consciencia = this.rvmg.getEntre(Math.random(), min, max);
    result.experiencia = this.rvmg.getEntre(Math.random(), min, max);
    result.memoria = this.rvmg.getEntre(Math.random(), min, max);
    result.ciencia = this.rvmg.getEntre(Math.random(), min, max);
    
    return result;
  }

    getLista(seed: number, quantidade: number): any[] {
      var resultado = [];
      for (let i = 0; i < quantidade; i++){
        resultado.push(this.get(seed));
      }
      return resultado; 
  }
  constructor() { }

}
