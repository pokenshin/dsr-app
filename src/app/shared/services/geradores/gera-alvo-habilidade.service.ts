import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { AlvoHabilidade } from '../../classes/efeitos/alvos/alvo-habilidade';
import { GeraInteiroService, GeraValorMagService, GeraStringService } from './geral';
import { AlvoCirculo } from '../../classes/efeitos/alvos/alvo-circulo';
import { AlvoEgo } from '../../classes/efeitos/alvos/alvo-ego';
import { AlvoElipse } from '../../classes/efeitos/alvos/alvo-elipse';
import { AlvoLinha } from '../../classes/efeitos/alvos/alvo-linha';
import { AlvoLosango } from '../../classes/efeitos/alvos/alvo-losango';
import { AlvoPonto } from '../../classes/efeitos/alvos/alvo-ponto';
import { AlvoTriangulo } from '../../classes/efeitos/alvos/alvo-triangulo';
import { AlvoVetor } from '../../classes/efeitos/alvos/alvo-vetor';

@Injectable()
export class GeraAlvoHabilidadeService implements Gerador {

  get(seed: number):AlvoHabilidade {
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    var rsg = new GeraStringService();
    var tipoAlvo = rng.getEntre(Math.random(), 1, 8);
    var gTipoAlvo = new GeraAlvoHabilidadeService();

    switch (tipoAlvo){
      case 1:
        var resultCirculo = new AlvoCirculo();
        resultCirculo.raioMaximo = rvmg.get(Math.random());
        return resultCirculo;

      case 2:
        return new AlvoEgo();
      
      case 3:
        var resultElipse = new AlvoElipse();
        resultElipse.regras = 'Regras aletaórias';
        return resultElipse;
      
      case 4:
        var resultLinha = new AlvoLinha();
        resultLinha.distancia = rvmg.get(Math.random());
        resultLinha.velocidade = rvmg.get(Math.random());
        return resultLinha;

      case 5:
        var resultLosango = new AlvoLosango();
        resultLosango.raioMaximo = rvmg.get(Math.random());
        return resultLosango;

      case 6:
        return new AlvoPonto();
      
      case 7:
        return new AlvoTriangulo();

      case 8:
        var resultVetor = new AlvoVetor();
        resultVetor.pulos = rvmg.get(Math.random());
        return resultVetor;      
    }
  }
  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
