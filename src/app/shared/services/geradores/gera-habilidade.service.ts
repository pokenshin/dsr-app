import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Habilidade } from '../../classes/ser/habilidades/habilidade';
import { GeraAreaCientificaService } from './gera-area-cientifica.service';
import { GeraEfeitoService } from './gera-efeito.service';
import { GeraInteiroService, GeraStringService } from './geral';
import { GeraEnergiaService } from './gera-energia.service';
import { GeraPericiaService } from './gera-pericia.service';
import { GeraTipoHabilidadeService } from './gera-tipo-habilidade.service';

@Injectable()
export class GeraHabilidadeService implements Gerador {

  get(seed: number):Habilidade {
    var result = new Habilidade();
    var gAreaCientifica = new GeraAreaCientificaService();
    var gEfeito = new GeraEfeitoService();
    var gEnergia = new GeraEnergiaService();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    var gPericia = new GeraPericiaService();
    var gTipoHabilidade = new GeraTipoHabilidadeService();
    result.areaCientifica = gAreaCientifica.get(Math.random());
    result.caracteristicas = "Habilidade gerada aleatoriamente.";
    result.efeitos = gEfeito.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    result.energia = gEnergia.get(Math.random());
    result.id = rng.get(Math.random());
    result.magnitude = rng.getEntre(Math.random(), 1, 100);
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.pericia = gPericia.get(Math.random());
    result.tipo = gTipoHabilidade.get(Math.random());
    
    return result;
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
