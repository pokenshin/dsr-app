import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Habilidade } from '../../classes/ser/habilidades/habilidade';
import { GeraAreaCientificaService } from './gera-area-cientifica.service';
import { GeraEfeitoService } from './gera-efeito.service';
import { GeraInteiroService } from './geral';

@Injectable()
export class GeraHabilidadeService implements Gerador {

  get(seed: number):Habilidade {
    var result = new Habilidade();
    var gAreaCientifica = new GeraAreaCientificaService();
    var gEfeito = new GeraEfeitoService();
    var rng = new GeraInteiroService();
    result.areaCientifica = gAreaCientifica.get(Math.random());
    result.caracteristicas = "Habilidade gerada aleatoriamente.";
    result.efeitos = gEfeito.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    
    throw new Error("Method not implemented.");
  }
  getLista(seed: number, quantidade: number): Habilidade[] {
    var resultado = new Array<Habilidade>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;    
  }
  constructor() { }

}
