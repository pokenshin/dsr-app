import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { TipoAcao } from 'shared/core/ser/acao';
import { GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';

@Injectable()
export class GeraTipoAcaoService implements Gerador {

  get(seed: number):TipoAcao {
    var result = new TipoAcao();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    return result;
  }
  getLista(seed: number, quantidade: number): TipoAcao[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

}
