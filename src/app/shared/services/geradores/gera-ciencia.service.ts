import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Ciencia } from '../../classes/ciencias/ciencia';
import { GeraEsferaService } from './gera-esfera.service';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraCienciaService implements Gerador {

  get(seed: number):Ciencia {
    var result = new Ciencia();
    var gEsfera = new GeraEsferaService();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    result.esfera = gEsfera.get(Math.random());
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);

    return result;
  }
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
