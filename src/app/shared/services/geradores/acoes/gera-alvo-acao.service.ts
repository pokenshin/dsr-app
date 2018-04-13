import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { AlvoHabilidade } from 'shared/core/efeitos/alvos/alvo-habilidade';
import { GeraInteiroService, GeraValorMagService, GeraStringService } from 'shared/services/geradores/geral';
import { AlvoCirculo, AlvoEgo, AlvoElipse, AlvoLinha, AlvoLosango, AlvoPonto, AlvoTriangulo, AlvoVetor } from 'shared/core/efeitos/alvos/';

@Injectable()
export class GeraAlvoAcaoService implements Gerador {

  get(seed: number):AlvoHabilidade {
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    var rsg = new GeraStringService();
    var tipoAlvo = rng.getEntre(Math.random(), 1, 8);

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
