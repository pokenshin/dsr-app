import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Ser } from '../..';
import { GeraAtributosService } from './atributos/gera-atributos.service';
import { GeraModificadorService } from './gera-modificador.service';
import { GeraInteiroService } from './geral';
import { GeraIdentidadeService } from './gera-identidade.service';
import { GeraEquipamentoService } from './gera-equipamento.service';
import { GeraPericiaService } from './gera-pericia.service';
import { GeraItemService } from './gera-item.service';
import { GeraRespostaService } from './gera-resposta.service';
import { CalculaSerService } from '../calculadores';
import { GeraHabilidadeService } from './gera-habilidade.service';

@Injectable()
export class GeraSerService implements Gerador {

  get(seed: number):Ser {
    var result = new Ser();
    var gAtributos = new GeraAtributosService();
    var gModificador = new GeraModificadorService();
    var gIdentidade = new GeraIdentidadeService();
    var rng = new GeraInteiroService();
    var gEquipamento = new GeraEquipamentoService();
    var gPericia = new GeraPericiaService();
    var gItem = new GeraItemService();
    var gResposta = new GeraRespostaService();
    var gHabilidade = new GeraHabilidadeService();
    var calculadorSer = new CalculaSerService();
    
    result.atributos = gAtributos.get(Math.random());
    result.defeitos = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.dons = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.identidade = gIdentidade.get(Math.random());
    result.itensEquipados = gEquipamento.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.pericias = gPericia.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.habilidades = gHabilidade.getLista(Math.random(), rng.getEntre(Math.random(), 1, 20));
    result.posses = gItem.getLista(Math.random(), rng.getEntre(Math.random(), 1, 20));
    result.resposta = gResposta.get(Math.random());

    result = calculadorSer.calculaSer(result);

    return result;

  }
  getLista(seed: number, quantidade: number): Ser[] {
    var resultado = new Array<Ser>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  }
  constructor() { }

}
