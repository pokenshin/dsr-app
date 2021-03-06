import { Injectable } from '@angular/core';
import { GeraInteiroService, GeraBooleanService, GeraStringService, GeraValorMagService } from 'shared/services/geradores/geral';
import { Gerador } from 'shared/services/geradores';
import { Forca } from 'shared/core/ser/atributos';
import { ValorMag } from 'shared/core';

@Injectable()
export class GeraForcaService implements Gerador {
  private rng: GeraInteiroService;
  private rbg: GeraBooleanService;
  private rsg: GeraStringService;
  private rvmg: GeraValorMagService;

  get(seed: number): Forca {
    var result = new Forca();
    this.rng = new GeraInteiroService();
    this.rsg = new GeraStringService();
    this.rvmg = new GeraValorMagService();
    var min = new ValorMag(10, 1);
    var max = new ValorMag(99, 15); 
    result.bonusCP = this.rng.getEntre(Math.random(), 1, 9999);
    result.classe = this.rsg.getTamanhoEspecifico(Math.random(), 1,1);
    result.dureza = this.rvmg.getEntre(Math.random(), min, max);
    result.golpe = this.rvmg.getEntre(Math.random(), min, max);
    result.nivel = this.rng.getEntre(Math.random(), 1, 5);
    result.pontos = this.rng.getEntre(Math.random(), 1, 100);
    result.porcentagem = this.rvmg.getEntre(Math.random(), min, max);
    result.potencia = this.rvmg.getEntre(Math.random(), min, max);
    result.sustentacao = this.rvmg.getEntre(Math.random(), min, max);
    result.vigor = this.rvmg.getEntre(Math.random(), min, max);

    return result;
  }

  getLista(seed: number, quantidade: number): Forca[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado; 
  }


  constructor() { }

}
