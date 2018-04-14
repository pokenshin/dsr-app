import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Identidade } from 'shared/core/ser/identidade';
import { GeraClasseService } from 'shared/services/geradores/classes';
import { GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';
import { GeraEspecieService } from 'shared/services/geradores/especies/gera-especie.service';
import { GeraIndoleService } from './gera-indole.service';
import { GeraReiService } from './gera-rei.service';
import { GeraOrigemService } from 'shared/services/geradores/lugares';
import { Rei } from 'shared/core/ser/rei';

@Injectable()
export class GeraIdentidadeService implements Gerador {

  get(seed: number) {
    var result = new Identidade();
    var gClasses = new GeraClasseService();
    var rng = new GeraInteiroService();
    var gEspecie = new GeraEspecieService();
    var gIndole = new GeraIndoleService();
    var rsg = new GeraStringService();
    var gOrigem = new GeraOrigemService();

    result.classes = gClasses.getLista(Math.random(), rng.getEntre(Math.random(), 1, 3));
    result.corpo = rng.getEntre(Math.random(), 1, 5);
    result.especies = gEspecie.getLista(Math.random(), rng.getEntre(Math.random(), 1, 3));
    result.indole = gIndole.get(Math.random());
    result.ki = rng.getEntre(Math.random(), 0, 1000);
    result.magnitude = rng.getEntre(Math.random(), 0, 30);
    result.natureza = gIndole.get(Math.random());
    result.nivel = rng.getEntre(Math.random(), 0, 1000);
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.origem = gOrigem.get(Math.random());
    result.reis = this.geraReis();
    result.tempo = rng.getEntre(Math.random(), 0, 1000);

    return result;
  }
  getLista(seed: number, quantidade: number): Identidade[] {
    var resultado = new Array<Identidade>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }

  private geraReis():Rei[]{
    var gRei = new GeraReiService();
    var result = new Array<Rei>();
    var rng = new GeraInteiroService();
    var chance = rng.getEntre(Math.random(), 1, 3);

    while (chance == 1){
      result.push(gRei.get(Math.random()));
      chance = rng.getEntre(Math.random(), 1, 10);
    }

    return result;
  }

  constructor() { }

}
