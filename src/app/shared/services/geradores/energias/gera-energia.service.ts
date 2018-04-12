import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Energia } from 'shared/core/energias';
import { GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';

@Injectable()
export class GeraEnergiaService implements Gerador {

  get(seed: number):Energia {
    var result = new Energia();
    var tipos = new Array<Energia>();
    tipos = [ 
      new Energia(1, 'CP', 'Cognitiva', 0),
      new Energia(2, 'EP', 'Espiritual', 0),
      new Energia(3, 'HP', 'Vida', 0),
      new Energia(4, 'MP', 'Mana', 0),
      new Energia(5, 'SP', 'Spirit', 0),
      new Energia(6, 'XP', 'Axé', 0),
      new Energia(7, 'PE', 'Percepção', 0),
      new Energia(8, 'PA', 'PA', 0)
    ];
    var rng = new GeraInteiroService();
    result = tipos[rng.getEntre(Math.random(), 0, tipos.length - 1)];
    result.quantidade = rng.getEntre(Math.random(), 1, 9999);
    return result;
  }
  getLista(seed: number, quantidade: number): Energia[] {
    var resultado = new Array<Energia>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;    
  }
  constructor() { }

}
