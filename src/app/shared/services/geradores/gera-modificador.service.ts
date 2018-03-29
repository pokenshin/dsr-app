import { Injectable } from '@angular/core';
import { Gerador } from './gerador';
import { Modificador } from '../../classes/ser/modificadores/modificador';
import { GeraInteiroService, GeraValorMagService } from './geral/';
import { Ser } from '../../classes/ser/ser';

@Injectable()
export class GeraModificadorService implements Gerador {
  tiposModificadores = ['+','*', '-', '/'];
  get(seed: number):Modificador {
    var ser = new Ser();
    var keys = Object.keys(ser);
    console.log(keys);
    console.log(ser);
    throw new Error("Method not implemented.");
  }
  getLista(seed: number, quantidade: number): Modificador[] {
    throw new Error("Method not implemented.");
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
