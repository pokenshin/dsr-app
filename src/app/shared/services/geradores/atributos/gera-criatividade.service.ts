import { Injectable } from '@angular/core';
import { Gerador } from '../gerador';
import { GeraInteiroService } from '../geral/gera-inteiro.service';
import { GeraBooleanService } from '../geral/gera-boolean.service';
import { GeraStringService } from '../geral/gera-string.service';
import { GeraValorMagService } from '../geral/gera-valor-mag.service';
import { Criatividade } from '../../../classes/ser/atributos/criatividade';
import { ValorMag } from '../../../classes/valormag';

@Injectable()
export class GeraCriatividadeService implements Gerador {

  private rng: GeraInteiroService;
  private rbg: GeraBooleanService;
  private rsg: GeraStringService;
  private rvmg: GeraValorMagService;

  get(seed: number): Criatividade {
    var result = new Criatividade();
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
    result.bonusMP = this.rvmg.getEntre(Math.random(), min, max);
    result.invencao = this.rvmg.getEntre(Math.random(), min, max);
    result.irrealidade = this.rvmg.getEntre(Math.random(), min, max);
    result.realidade = this.rvmg.getEntre(Math.random(), min, max);
    result.singularidade = this.rvmg.getEntre(Math.random(), min, max);
    result.tutor = this.rvmg.getEntre(Math.random(), min, max);
        
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
