import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Municao } from '../../classes/itens/municao';
import { GeraValorMagService, GeraInteiroService, GeraStringService, GeraBooleanService } from './geral';
import { GeraEnergiaService } from './gera-energia.service';
import { GeraMaterialService } from './gera-material.service';
import { GeraModificadorService } from './gera-modificador.service';

@Injectable()
export class GeraMunicaoService implements Gerador {

  get(seed: number):Municao {
    var result = new Municao();
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
    result.slot = rng.getEntre(Math.random(), 1, 5);
    result.corteBonus = rvmg.get(Math.random());
    result.danoBonus = rvmg.get(Math.random());
    result.impactoBonus = rvmg.get(Math.random());
    result.penetracaoBonus = rvmg.get(Math.random());

    return result;
  }
  getLista(seed: number, quantidade: number): Municao[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

}
