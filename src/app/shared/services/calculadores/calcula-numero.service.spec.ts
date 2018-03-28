import { TestBed, inject } from '@angular/core/testing';

import { CalculaNumeroService } from './calcula-numero.service';
import { ValorMag } from '../..';

describe('CalculaNumeroService', () => {
  let service: CalculaNumeroService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculaNumeroService]
    });
    this.service = new CalculaNumeroService();
  });

  it('should be created', inject([CalculaNumeroService], (service: CalculaNumeroService) => {
    expect(service).toBeTruthy();
  }));

  it ('MultiplicaValorMag recebe 10m2 e 10m3, retornando 10m4', () =>{
    var result: ValorMag;
    result = this.service.multiplicaValorMag(new ValorMag(10, 2), new ValorMag(10, 3));
    expect(result.toString()).toBe("10m4");
    expect(result.valor).toBe(10);
    expect(result.magnitude).toBe(4);
  })

  it ('DivideValorMag recebe 10m4 e 10m3, retornando 10m2', () =>{
    var result: ValorMag;
    result = this.service.divideValorMag(new ValorMag(10, 4), new ValorMag(10, 3));
    expect(result.toString()).toBe("10m2");
    expect(result.valor).toBe(10);
    expect(result.magnitude).toBe(2);
  })

  it('calculaPorcentagem calcula que 25% de 1000 é 250', () =>{
    var result: number;
    result = this.service.calculaPorcentagem(25, 1000);
    expect(result).toBe(250);
  })

  it('calculaPorcentagemDeTotal retorna que 250 é 25% de 1000', () =>{
    var result: number;
    result = this.service.calculaPorcentagemDeTotal(250, 1000);
    expect(result).toBe(25);
  })

  it('subtraiValorMag recebe 10m4 e 10m3 e retorna 9m4', ()=>{
    var result:ValorMag;
    result = this.service.subtraiValorMag(new ValorMag(10, 4), new ValorMag(10, 3));
    expect(result.toString()).toBe("9m4");
  })

  it('somaValorMag recebe 50m4 e 10m5 e retorna 15m5', ()=>{
    var result:ValorMag;
    result = this.service.somaValorMag(new ValorMag(50, 4), new ValorMag(10, 5));
    console.log(result);
    expect(result.toString()).toBe("15m5");
  })
});