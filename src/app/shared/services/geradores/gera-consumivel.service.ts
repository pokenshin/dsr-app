import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Consumivel } from '../../classes/itens/consumivel';
import { GeraEfeitoService } from './gera-efeito.service';
import { GeraValorMagService, GeraInteiroService, GeraStringService, GeraBooleanService } from './geral';
import { GeraEnergiaService } from './gera-energia.service';
import { GeraMaterialService } from './gera-material.service';
import { GeraModificadorService } from './gera-modificador.service';

@Injectable()
export class GeraConsumivelService implements Gerador {

  get(seed: number):Consumivel {
    var result = new Consumivel();
    var rvmg = new GeraValorMagService();
    var gEnergia = new GeraEnergiaService();
    var rng = new GeraInteiroService();
    var gMaterial = new GeraMaterialService();
    var gModificador = new GeraModificadorService();
    var rsg = new GeraStringService();
    var rbg = new GeraBooleanService();
    var gEfeito = new GeraEfeitoService();
    var atributos = ["Força", "Destreza", "Matéria", "Intelecto", "Criatividade", "Idéia", "Existência"]
    
    result.caracteristicas = "Item gerado aleatoriamente.";
    result.comprimento = rvmg.get(Math.random());
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
    result.tipo = rng.getEntre(Math.random(), 1, 10);
    result.valor = rng.get(Math.random());
    result.efeitos = gEfeito.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));

    return result;
  }
  getLista(seed: number, quantidade: number): any[] {
    var resultado = [];
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

}
