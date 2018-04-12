import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Pericia } from 'shared/core/ser/pericia';
import { GeraCienciaService } from 'shared/services/geradores/ciencias';
import { GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';
import { GeraModificadorService } from 'shared/services/geradores/modificadores';

@Injectable()
export class GeraPericiaService implements Gerador {

  get(seed: number):Pericia {
    var result = new Pericia();
    var gCiencia = new GeraCienciaService();
    var rng = new GeraInteiroService();
    var gModificador = new GeraModificadorService();
    var rsg = new GeraStringService();
    result.caracteristicas = 'Pericia gerada aleatoriamente.';
    result.ciencia = gCiencia.get(Math.random());
    result.id = rng.get(Math.random());
    result.modificadores = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 4, 10);
    return result;
  }
  getLista(seed: number, quantidade: number): Pericia[] {
    var resultado = new Array<Pericia>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
