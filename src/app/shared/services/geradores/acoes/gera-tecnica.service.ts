import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Habilidade, Tecnica } from 'shared/core/ser/acao';
import { GeraAreaCientificaService } from 'shared/services/geradores/ciencias';
import { GeraEfeitoService } from 'shared/services/geradores/efeitos';
import { GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';
import { GeraEnergiaService } from 'shared/services/geradores/energias';
import { GeraPericiaService } from 'shared/services/geradores/pericias';
import { GeraTipoAcaoService } from './gera-tipo-acao.service';

@Injectable()
export class GeraTecnicaService implements Gerador {

  get(seed: number):Tecnica {
    var result = new Tecnica();
    var gAreaCientifica = new GeraAreaCientificaService();
    var gEfeito = new GeraEfeitoService();
    var gEnergia = new GeraEnergiaService();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    var gPericia = new GeraPericiaService();
    var gTipoAcao = new GeraTipoAcaoService();
    result.areaCientifica = gAreaCientifica.get(Math.random());
    result.caracteristicas = "Técnica gerada aleatoriamente.";
    result.efeitos = gEfeito.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));
    result.energia = gEnergia.get(Math.random());
    result.id = rng.get(Math.random());
    result.magnitude = rng.getEntre(Math.random(), 1, 100);
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.pericia = gPericia.get(Math.random());
    result.tipo = gTipoAcao.get(Math.random());
    
    return result;
  }
  getLista(seed: number, quantidade: number): Tecnica[] {
    var resultado = new Array<Tecnica>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;    
  }
  constructor() { }
}
