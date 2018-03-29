import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Intelecto } from '../../classes/ser/atributos/intelecto';
import { GeraInteiroService } from './gera-inteiro.service';
import { GeraBooleanService } from './gera-boolean.service';
import { GeraStringService } from './gera-string.service';
import { GeraValorMagService } from './gera-valor-mag.service';
import { ValorMag } from '../..';

@Injectable()
export class GeraIntelectoService implements Gerador {
  private rng: GeraInteiroService;
  private rbg: GeraBooleanService;
  private rsg: GeraStringService;
  private rvmg: GeraValorMagService;

  get(seed: number): Intelecto {
    var result = new Intelecto();
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
    result.aprendizagem = this.rvmg.getEntre(Math.random(), min, max);
    result.concentracao = this.rvmg.getEntre(Math.random(), min, max);
    result.eidos = this.rvmg.getEntre(Math.random(), min, max);
    result.senso = this.rvmg.getEntre(Math.random(), min, max);
    result.visualizacao = this.rvmg.getEntre(Math.random(), min, max);
    
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
