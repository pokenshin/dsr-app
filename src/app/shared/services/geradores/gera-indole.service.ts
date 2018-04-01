import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Indole } from '../../classes/ser/indole';
import { GeraCarismaService } from './gera-carisma.service';
import { GeraDestinoService } from './gera-destino.service';
import { GeraInteiroService, GeraStringService } from './geral';

@Injectable()
export class GeraIndoleService implements Gerador {

  get(seed: number):Indole {
    var result = new Indole();
    var gCarisma = new GeraCarismaService();
    var gDestino = new GeraDestinoService();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();

    result.carisma = gCarisma.get(Math.random());
    result.destino = gDestino.get(Math.random());
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);

    return result;
  }

  getLista(seed: number, quantidade: number): Indole[] {
    var resultado = new Array<Indole>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
