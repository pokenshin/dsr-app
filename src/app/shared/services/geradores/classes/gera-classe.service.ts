import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Classe } from 'shared/core/ser';
import { GeraBooleanService, GeraInteiroService, GeraStringService } from 'shared/services/geradores/geral';
import { GeraCienciaService } from 'shared/services/geradores/ciencias';
import { GeraPericiaService } from 'shared/services/geradores/pericias';

@Injectable()
export class GeraClasseService implements Gerador {

  get(seed: number):Classe {
    var result = new Classe();
    var gCiencia = new GeraCienciaService();
    var rng = new GeraInteiroService();
    var rsg = new GeraStringService();
    var gPericia = new GeraPericiaService();

    result.atributoEspiritual = this.pegaAtributoAleatorio("espiritual");
    result.atributoMental = this.pegaAtributoAleatorio("mental");
    result.atributoFisico = this.pegaAtributoAleatorio("fisico");
    result.ciencia = gCiencia.get(Math.random());
    result.descricao = 'Classe gerada aleatoriamente.';
    result.estilo = this.geraEstiloAleatorio();
    result.funcao = this.geraFuncaoAleatoria();
    result.id = rng.get(Math.random());
    result.nome = rsg.getTamanhoEspecifico(Math.random(), 3, 10);
    result.origemPoder = "Origem aleatória";
    result.pericias = gPericia.getLista(Math.random(), rng.getEntre(Math.random(), 1, 5));

    return result;
  }

  getLista(seed: number, quantidade: number): Classe[] {
    var resultado = new Array<Classe>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado;  
  }
  constructor() { }

  private geraFuncaoAleatoria():string{
    var rng = new GeraInteiroService();
    var opcao = rng.getEntre(Math.random(), 1, 4);
    switch(opcao){
      case 1:
        return "Dano";
      
      case 2:
        return "Suporte";

      case 3:
        return "Proteção";

      case 4:
        return "Não-combate";  
        
      default:
        return "";
    }
  }
  
  private geraEstiloAleatorio():string{
    var rng = new GeraInteiroService();
    var opcao = rng.getEntre(Math.random(), 1, 2);
    switch(opcao){
      case 1:
        return "Melee";
      
      case 2:
        return "Ranged";

      default:
        return "";
    }
  }
  
  private pegaAtributoAleatorio(categoria:string): string{
    var rbg = new GeraBooleanService();
    var rng = new GeraInteiroService();
    if (categoria == "espiritual"){
      if (rbg.get(Math.random())){
        return "Existência";
      } else{
        return "Idéia"
      }
    }else if (categoria == "mental"){
      if (rbg.get(Math.random())){
        return "Intelecto";
      } else{
        return "Criatividade";
      }
    }else if (categoria == "fisico"){
      var opcao = rng.getEntre(Math.random(), 1, 3);
      switch (opcao){
        case 1:
          return "Força";
        
        case 2:
          return "Destreza";
        
        case 3:
          return "Matéria";

        default:
          return "";
      }
    }
  }
}
