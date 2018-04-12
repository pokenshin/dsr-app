import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Material } from 'shared/core/itens/material';
import { GeraValorMagService, GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';
import { GeraEnergiaService } from 'shared/services/geradores/energias';
import { GeraModificadorService } from 'shared/services/geradores/modificadores';

@Injectable()
export class GeraMaterialService implements Gerador {

  get(seed: number):Material {
    var result = new Material();
    var rvmg = new GeraValorMagService();
    var gEnergia = new GeraEnergiaService();
    var rng = new GeraInteiroService();
    var gModificador = new GeraModificadorService();
    var rsg = new GeraStringService();

    result.caracteristicas = 'Material gerado aleatoriamente.';
    result.comprimento = rvmg.get(Math.random());
    result.densidadePorGrama = rvmg.get(Math.random());
    result.dureza = rvmg.get(Math.random());
    result.energia = gEnergia.get(Math.random());
    result.essencia = rng.getEntre(Math.random(), 1, 1000);
    result.id = rng.get(Math.random());
    result.largura = rvmg.get(Math.random());
    result.magnitude = rng.getEntre(Math.random(), 1, 30);
    result.massa = rvmg.get(Math.random());
    result.modificadores = gModificador.getLista(Math.random(), rng.getEntre(Math.random(), 1, 10));
    result.nivel = rng.getEntre(Math.random(), 1, 1000);
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.peso = rvmg.get(Math.random());
    result.raridade = rng.getEntre(Math.random(), 1, 100);
    result.resistencia = rvmg.get(Math.random());
    result.tipo = rng.getEntre(Math.random(), 1, 10);
    result.valor = rng.get(Math.random());

    return result;
 }
  getLista(seed: number, quantidade: number): Material[] {
    var resultado = new Array<Material>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;
  }
  constructor() { }

}
