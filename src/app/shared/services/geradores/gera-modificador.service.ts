import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Modificador } from '../../classes/ser/modificadores/modificador';
import { GeraInteiroService, GeraValorMagService } from './geral/';
import { Ser } from '../../classes/ser/ser';
import { ModIdentidade } from '../../classes/ser/modificadores/mod-identidade';

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
