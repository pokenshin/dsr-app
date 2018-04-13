import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Efeito, EfeitoCura, EfeitoDano, EfeitoModificador } from 'shared/core/efeitos';
import { GeraInteiroService, GeraValorMagService } from 'shared/services/geradores/geral';
import { GeraDuracaoService } from 'shared/services/geradores/efeitos';
import { GeraEnergiaService } from 'shared/services/geradores/energias';
import { GeraAlvoAcaoService } from 'shared/services/geradores/acoes';
import { GeraModificadorService } from 'shared/services/geradores/modificadores';

@Injectable()
export class GeraEfeitoService implements Gerador {

  get(seed: number):Efeito {
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    var tipoEfeito = rng.getEntre(Math.random(), 1, 3);
    var gTipoDuracao = new GeraDuracaoService();
    var gEnergia = new GeraEnergiaService();
    var gTipoAlvo = new GeraAlvoAcaoService();
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
