import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Posse } from 'shared/core/itens/posse';
import { GeraValorMagService, GeraInteiroService, GeraStringService, GeraBooleanService } from 'shared/services/geradores/geral';
import { GeraEnergiaService } from 'shared/services/geradores/energias';
import { GeraMaterialService } from './gera-material.service';
import { GeraModificadorService } from 'shared/services/geradores/modificadores';

@Injectable()
export class GeraPosseService implements Gerador {

  get(seed: number):Posse {
    var result = new Posse();
    var rvmg = new GeraValorMagService();
    var gEnergia = new GeraEnergiaService();
    var rng = new GeraInteiroService();
    var gMaterial = new GeraMaterialService();
    var gModificador = new GeraModificadorService();
    var rsg = new GeraStringService();
    var rbg = new GeraBooleanService();    

    result.caracteristicas = "Item gerado aleatoriamente.";
    result.comprimento = rvmg.get(Math.random());
    result.energia = gEnergia.get(Math.random());
    result.essencia = rng.getEntre(Math.random(), 1, 1000);
    result.id = rng.get(Math.random());
    result.largura = rvmg.get(Math.random());
    result.magnitude = rng.getEntre(Math.random(), 1, 30);
    result.massa = rvmg.get(Math.random());
    result.materialBase = gMaterial.get(Math.random());
    result.modificadores = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.nivel = rng.getEntre(Math.random(), 1, 1000);
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.peso = rvmg.get(Math.random());
    result.raridade = rng.getEntre(Math.random(), 1, 100);
    result.tipo = rng.getEntre(Math.random(), 1, 10);
    result.valor = rng.get(Math.random());

    return result;
  }
  getLista(seed: number, quantidade: number): any[] {
    var resultado = new Array<Posse>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  }
  constructor() { }

}
