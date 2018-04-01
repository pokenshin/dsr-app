import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Rei } from '../../classes/ser/rei';
import { GeraInteiroService, GeraStringService } from './geral';
import { GeraModificadorService } from './gera-modificador.service';

@Injectable()
export class GeraReiService implements Gerador {

  get(seed: number):Rei {
    var result = new Rei();
    var rng = new GeraInteiroService();
    var cores = ['Dourado', 'Branco', 'Azul', 'Roxo', 'Verde', 'Vermelho', 'Laranja', "Amarelo", "Cintilante", ""]
    var gModificador = new GeraModificadorService();
    var rsg = new GeraStringService();

    result.cor = cores[rng.getEntre(Math.random(), 0, cores.length)];
    result.id = rng.get(Math.random());
    result.magnitude = rng.getEntre(Math.random(), 1, 30);
    result.modificadores = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.origem = "Rei gerado aleatoriamente.";
    
    return result;
    
  }
  getLista(seed: number, quantidade: number): Rei[] {
    var resultado = new Array<Rei>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
