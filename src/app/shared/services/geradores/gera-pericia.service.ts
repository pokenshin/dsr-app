import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Pericia } from '../../classes/ser/pericia';
import { GeraCienciaService } from './gera-ciencia.service';
import { GeraInteiroService, GeraStringService } from './geral';
import { GeraModificadorService } from './gera-modificador.service';

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
