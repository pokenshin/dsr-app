import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Item } from 'shared/core/itens/item';
import { GeraInteiroService } from 'shared/services/geradores/geral';
import { GeraArmaBrancaService } from './gera-arma-branca.service';
import { GeraArmaTiroService } from './gera-arma-tiro.service';
import { GeraConsumivelService } from './gera-consumivel.service';
import { GeraMunicaoService } from './gera-municao.service';
import { GeraPosseService } from './gera-posse.service';
import { GeraVestivelService } from './gera-vestivel.service';
import { GeraEquipamentoService } from './gera-equipamento.service';

@Injectable()
export class GeraItemService implements Gerador {

  get(seed: number):Item {
    var rng = new GeraInteiroService();
    var tipoItem = rng.getEntre(Math.random(), 1, 4);

    switch (tipoItem){
      case 1:
        var gConsumivel = new GeraConsumivelService();
        return gConsumivel.get(Math.random());

      case 2:
        var gMunicao = new GeraMunicaoService();
        return gMunicao.get(Math.random());

      case 3:
        var gPosse = new GeraPosseService();
        return gPosse.get(Math.random());

      case 4:
        var gEquipamento = new GeraEquipamentoService();  
        return gEquipamento.get(Math.random());

      default:
        return undefined;
    }

  }
  getLista(seed: number, quantidade: number): any[] {
    var resultado = new Array<Item>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  }
  constructor() { }

}
