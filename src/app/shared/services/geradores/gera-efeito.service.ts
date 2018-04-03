import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Efeito } from '../../classes/efeitos/efeito';
import { GeraInteiroService, GeraValorMagService } from './geral';
import { EfeitoCura } from '../../classes/efeitos/efeito-cura';
import { GeraDuracaoService } from './gera-duracao.service';
import { GeraEnergiaService } from './gera-energia.service';
import { GeraAlvoHabilidadeService } from './gera-alvo-habilidade.service';
import { EfeitoDano } from '../../classes/efeitos/efeito-dano';
import { EfeitoModificador } from '../../classes/efeitos/efeito-modificador';
import { GeraModificadorService } from './gera-modificador.service';

@Injectable()
export class GeraEfeitoService implements Gerador {

  get(seed: number):Efeito {
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    var tipoEfeito = rng.getEntre(Math.random(), 1, 3);
    var gTipoDuracao = new GeraDuracaoService();
    var gEnergia = new GeraEnergiaService();
    var gTipoAlvo = new GeraAlvoHabilidadeService();
    var gModificador = new GeraModificadorService();

    switch (tipoEfeito){
      case 1:
        var resultCura = new EfeitoCura();
        resultCura.duracao = gTipoDuracao.get(Math.random());
        resultCura.energia = gEnergia.get(Math.random());
        resultCura.tipoAlvo = gTipoAlvo.get(Math.random());
        resultCura.valor = rvmg.get(Math.random());
        return resultCura;

      case 2:
        var resultDano = new EfeitoDano();
        resultDano.duracao = gTipoDuracao.get(Math.random());
        resultDano.energia = gEnergia.get(Math.random());
        resultDano.tipoAlvo = gTipoAlvo.get(Math.random());
        resultDano.valor = rvmg.get(Math.random());
        return resultDano;

      case 3:
        var resultModificador = new EfeitoModificador();
        resultModificador.duracao = gTipoDuracao.get(Math.random());
        resultModificador.tipoAlvo = gTipoAlvo.get(Math.random());
        resultModificador.modificador = gModificador.get(Math.random());
        return resultModificador;

      default:
        return new EfeitoModificador();
    }
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