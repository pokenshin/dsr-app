import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { AreaCientifica } from '../../classes/ciencias/area-cientifica';
import { GeraCienciaService } from './gera-ciencia.service';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraAreaCientificaService implements Gerador {

  get(seed: number) {
    var result = new AreaCientifica();
    var gCiencia = new GeraCienciaService();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.ciencia = gCiencia.get(Math.random());
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    return result;
  }
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
