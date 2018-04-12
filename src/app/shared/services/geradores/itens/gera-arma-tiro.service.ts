import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { ArmaDeTiro } from 'shared/core/itens/arma-de-tiro';
import { GeraValorMagService, GeraInteiroService, GeraStringService, GeraBooleanService } from 'shared/services/geradores/geral';
import { GeraEnergiaService } from 'shared/services/geradores/energias';
import { GeraMaterialService } from './gera-material.service';
import { GeraModificadorService } from 'shared/services/geradores/modificadores';
import { GeraMinMaxService } from 'shared/services/geradores/geral/gera-min-max.service';
import { GeraMunicaoService } from './gera-municao.service';

@Injectable()
export class GeraArmaTiroService implements Gerador {

  get(seed: number):ArmaDeTiro {
    var result = new ArmaDeTiro();
    var rvmg = new GeraValorMagService();
    var gEnergia = new GeraEnergiaService();
    var rng = new GeraInteiroService();
    var gMaterial = new GeraMaterialService();
    var gModificador = new GeraModificadorService();
    var rsg = new GeraStringService();
    var rbg = new GeraBooleanService();
    var gMinMax = new GeraMinMaxService();
    var gMunicao = new GeraMunicaoService();
    var atributos = ["Força", "Destreza", "Matéria", "Intelecto", "Criatividade", "Idéia", "Existência"]
    
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
    result.atributoBonus = atributos[rng.getEntre(Math.random(), 0, atributos.length)];
    result.danoCorte = rng.getEntre(Math.random(), 0, 99999999);
    result.danoImpacto = rng.getEntre(Math.random(), 0, 99999999);
    result.danoPenetracao = rng.getEntre(Math.random(), 0, 99999999);
    result.modificadorDano = rbg.getComChance(Math.random(), 0.7) ? '':'p/ki';
    result.multiplicadorCritico = rbg.getComChance(Math.random(), 0.7) ? 2 : rng.getEntre(Math.random(), 3, 10);
    result.distancia = gMinMax.getValorMag(Math.random());
    result.municao = gMunicao.get(Math.random());
    result.tirosPorAcao = rng.getEntre(Math.random(), 1, 999999);
    result.tirosPorCarga = rng.getEntre(Math.random(), 1, 999999);
    result.capacidade = rng.getEntre(Math.random(), 1, 9999999);

    return result;
  }
  getLista(seed: number, quantidade: number): ArmaDeTiro[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

}
