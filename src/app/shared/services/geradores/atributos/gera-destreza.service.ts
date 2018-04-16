import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { GeraInteiroService, GeraBooleanService, GeraStringService, GeraValorMagService } from 'shared/services/geradores/geral';
import { Destreza } from 'shared/core/ser/atributos';
import { ValorMag } from 'shared/core';

@Injectable()
export class GeraDestrezaService implements Gerador {
  private rng: GeraInteiroService;
  private rbg: GeraBooleanService;
  private rsg: GeraStringService;
  private rvmg: GeraValorMagService;
  
  get(seed: number): Destreza {
    var result = new Destreza();
    this.rng = new GeraInteiroService();
    this.rsg = new GeraStringService();
    this.rvmg = new GeraValorMagService();
    var min = new ValorMag(10, 1);
    var max = new ValorMag(99, 15);
    result.ataque = this.rvmg.getEntre(Math.random(), min, max);
    result.bonusCP = this.rng.getEntre(Math.random(), 1, 9999);
    result.classe = this.rsg.getTamanhoEspecifico(Math.random(), 1,1);
    result.coordenacao = this.rvmg.getEntre(Math.random(), min, max);
    result.esquiva = this.rvmg.getEntre(Math.random(), min, max);
    result.iniciativa = this.rvmg.getEntre(Math.random(), min, max);
    result.nivel = this.rng.getEntre(Math.random(), 1, 5);
    result.pontos = this.rng.getEntre(Math.random(), 1, 100);
    result.porcentagem = this.rvmg.getEntre(Math.random(), min, max);
    result.reflexo = this.rvmg.getEntre(Math.random(), min, max);
    return result;
  }
  getLista(seed: number, quantidade: number): Destreza[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado; 
  }
  constructor() { }

}
