import { Injectable } from '@angular/core';
import { GeraInteiroService } from './gera-inteiro.service';
import { GeraValorMagService } from './gera-valor-mag.service';
import { Gerador } from 'shared/services/geradores';
import { RangeValue, ValorMag } from '../../../core';
import { CalculaNumeroService } from '../../calculadores';

@Injectable()
export class GeraMinMaxService<T> implements Gerador {
  public rng: GeraInteiroService;
  public rvmg: GeraValorMagService;
  public calculador: CalculaNumeroService;

  get(seed: number):RangeValue<T> {
    return new RangeValue<T>();
  }

  getNumberGrande(seed:number):RangeValue<number>{
    this.rng = new GeraInteiroService();
    var min = this.rng.getEntre(Math.random(), 0, 999999);
    var max = min + this.rng.getEntre(Math.random(), 0, 999999);
    return new RangeValue(min, max);
  }

  getNumberMedio(seed:number):RangeValue<number>{
    this.rng = new GeraInteiroService();
    var min = this.rng.getEntre(Math.random(), 0, 9999);
    var max = min + this.rng.getEntre(Math.random(), 0, 9999);
    return new RangeValue(min, max);
  }

  getNumberPequeno(seed:number):RangeValue<number>{
    this.rng = new GeraInteiroService();
    var min = this.rng.getEntre(Math.random(), 0, 99);
    var max = min + this.rng.getEntre(Math.random(), 0, 99);
    return new RangeValue(min, max);
  }

  getValorMag(seed:number):RangeValue<ValorMag>{
    this.rvmg = new GeraValorMagService();
    this.calculador = new CalculaNumeroService();
    var min = this.rvmg.getEntre(Math.random(), new ValorMag(10, 1), new ValorMag(99, 10));
    var max = this.rvmg.getEntre(Math.random(), min, new ValorMag(99, 10));
    max = this.calculador.somaValorMag(min, max);
    return new RangeValue(min, max);
  }

  getLista(seed: number, quantidade: number): any[] {
    throw new Error("Method not implemented.");
  }

  constructor(

  ) { }

}
