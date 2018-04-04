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
    expect(result.toString()).toBe("15m5");
  })

  it('converte 200000 em 20m6', ()=>{
    var result:ValorMag;
    result = this.service.numberToValorMag(200000);
    expect(result.valor).toBe(20);
    expect(result.magnitude).toBe(6);
  })

  it ('multiplica 10m3 por 20 e tem como resultado 20m4', ()=>{
    var result:ValorMag;
    result = this.service.multiplicaValorMag(new ValorMag(10, 3), undefined, 20);
    expect (result.toString()).toBe("20m4");
  })

  it('converte 25m6 em 250000', ()=>{
    var result:number;
    result = this.service.valorMagToNumber(new ValorMag(25, 6));
    expect(result).toBe(250000);
  })
});
