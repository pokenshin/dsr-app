import { Injectable } from '@angular/core';
import { Gerador } from 'shared/services/geradores';
import { Modificador } from 'shared/core/ser/modificadores/modificador';
import { GeraInteiroService, GeraValorMagService } from 'shared/services/geradores/geral/';
import { Ser } from 'shared/core/ser/ser';
import { ModIdentidade } from 'shared/core/ser/modificadores/mod-identidade';

@Injectable()
export class GeraModificadorService implements Gerador {
  tiposModificadores = ['+','*', '-', '/'];
  get(seed: number):Modificador {
    var ser = new Ser();
    var keys = Object.keys(ser);
    return new ModIdentidade();
  }
  getLista(seed: number, quantidade: number): Modificador[] {
    var resultado = new Array<Modificador>();
    for (let i = 0; i < quantidade; i++){
      resultado.push(this.get(seed));
    }
    return resultado; 
  }

  getComOrigem(seed:number, origem:string, id:number, tipo:string ):Modificador{
    var rng = new GeraInteiroService();
    var rvmg = new GeraValorMagService();
    //var genPericia = new GeraPericiaService();
    //var genHabilidade = new GeraHabilidadeService();
    var tipoModificador = rng.getEntre(Math.random(), 1, 10);
    
    
    throw new Error("lol");
  }

  constructor() { }
}
