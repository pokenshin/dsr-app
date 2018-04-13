import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Ser } from 'shared/core/ser';
import { CalculaSerService } from 'shared/services/calculadores';
import { GeraAtributosService } from 'shared/services/geradores/atributos';
import { GeraModificadorService } from 'shared/services/geradores/modificadores';
import { GeraInteiroService } from 'shared/services/geradores/geral';
import { GeraIdentidadeService, GeraRespostaService } from './';
import { GeraEquipamentoService, GeraItemService } from 'shared/services/geradores/itens';
import { GeraPericiaService } from 'shared/services/geradores/pericias';
import { GeraHabilidadeService, GeraTecnicaService } from 'shared/services/geradores/acoes';
import {GeraArcanidadeService} from 'shared/services/geradores/acoes/gera-arcanidade.service';

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
    var gTecnica = new GeraTecnicaService();
    var gArcanidade = new GeraArcanidadeService();
    var calculadorSer = new CalculaSerService();
    
    result.atributos = gAtributos.get(Math.random());
    result.defeitos = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.dons = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.identidade = gIdentidade.get(Math.random());
    result.itensEquipados = gEquipamento.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.pericias = gPericia.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.habilidades = gHabilidade.getLista(Math.random(), rng.getEntre(Math.random(), 1, 20));
    result.tecnicas = gTecnica.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.arcanidades = gArcanidade.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.posses = gItem.getLista(Math.random(), rng.getEntre(Math.random(), 1, 20));
    result.resposta = gResposta.get(Math.random());

    result = calculadorSer.calculaSer(result);

    console.log("(GeraSerService.get) - Ser Gerado:", result)

    return result;
  }
  getLista(seed: number, quantidade: number): Ser[] {
    var resultado = new Array<Ser>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  }
  constructor() { 
  }
}