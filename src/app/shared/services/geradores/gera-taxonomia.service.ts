import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Taxonomia } from '../../classes/ser/taxonomia';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraTaxonomiaService implements Gerador {

  get(seed: number): Taxonomia {
    var result = new Taxonomia();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.id = rng.get(Math.random());
    result.classeTaxo = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.familiaTaxo = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.filoTaxo = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.generoTaxo = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.nomeCientifico = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.nomePopular = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.ordemTaxo = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.reinoTaxo = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.subClassificaoes = rsg.getLista(Math.random(), rng.getEntre(Math.random(), 1 ,5));
    return result;
  }
  getLista(seed: number, quantidade: number): Taxonomia[] {
    var resultado = new Array<Taxonomia>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
