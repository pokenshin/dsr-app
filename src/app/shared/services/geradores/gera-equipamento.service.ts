import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Equipamento } from '../../classes/itens/equipamento';
import { GeraValorMagService, GeraInteiroService, GeraStringService } from './geral';
import { GeraArmaBrancaService } from './gera-arma-branca.service';
import { GeraArmaTiroService } from './gera-arma-tiro.service';
import { GeraMunicaoService } from './gera-municao.service';
import { GeraVestivelService } from './gera-vestivel.service';

@Injectable()
export class GeraEquipamentoService implements Gerador {

  get(seed: number):Equipamento {
    var rng = new GeraInteiroService();
    var tipoItem = rng.getEntre(Math.random(), 1, 4);

    switch (tipoItem){
      case 1:
        var gArmaBranca = new GeraArmaBrancaService();
        return gArmaBranca.get(Math.random());

      case 2:
        var gArmaTiro = new GeraArmaTiroService();
        return gArmaTiro.get(Math.random());

      case 3:
        var gMunicao = new GeraMunicaoService();
        return gMunicao.get(Math.random());

      case 4:
        var gVestivel = new GeraVestivelService();  
        return gVestivel.get(Math.random());

      default:
        return undefined;
    }
  }
  getLista(seed: number, quantidade: number): Equipamento[] {
    var resultado = new Array<Equipamento>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
