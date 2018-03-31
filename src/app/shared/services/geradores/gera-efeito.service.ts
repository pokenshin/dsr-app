import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Efeito } from '../../classes/efeitos/efeito';
import { GeraInteiroService, GeraValorMagService } from './geral';
import { EfeitoCura } from '../../classes/efeitos/efeito-cura';
import { GeraDuracaoService } from './gera-duracao.service';
import { GeraEnergiaService } from './gera-energia.service';
import { GeraAlvoHabilidadeService } from './gera-alvo-habilidade.service';

@Injectable()
export class GeraEfeitoService implements Gerador {

  get(seed: number):Efeito {
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    var tipoEfeito = rng.getEntre(Math.random(), 1, 3);
    var gTipoDuracao = new GeraDuracaoService();
    var gEnergia = new GeraEnergiaService();
    var gTipoAlvo = new GeraAlvoHabilidadeService();

    switch (tipoEfeito){
      case 1:
        var result = new EfeitoCura();
        result.duracao = gTipoDuracao.get(Math.random());
        result.energia = gEnergia.get(Math.random());
        result.tipoAlvo = gTipoAlvo.get(Math.random());

    }

    throw new Error("Method not implemented.");
  }
  getLista(seed: number, quantidade: number): Efeito[] {
    var resultado = new Array<Efeito>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

}
