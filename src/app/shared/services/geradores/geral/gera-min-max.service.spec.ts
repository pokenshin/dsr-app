import { TestBed, inject } from '@angular/core/testing';

import { GeraMinMaxService } from './gera-min-max.service';
import { ValorMag } from 'shared/core';

describe('GeraMinMaxService', () => {
  let serviceNumber: GeraMinMaxService<number>;
  let serviceValorMag: GeraMinMaxService<ValorMag>;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraMinMaxService]
    });
    this.serviceNumber = new GeraMinMaxService<number>();
    this.serviceValorMag = new GeraMinMaxService<ValorMag>();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraMinMaxService], () => {
    this.serviceNumber = new GeraMinMaxService<number>();
    this.serviceValorMag = new GeraMinMaxService<ValorMag>();
    expect(this.serviceNumber).toBeTruthy();
    expect(this.serviceValorMag).toBeTruthy();
  }));

  it('deve gerar um number min menor que um max', () => {
    this.serviceNumber = new GeraMinMaxService<number>();
    var resultado = this.serviceNumber.getNumberGrande(this.seed);
    expect(resultado).toBeDefined();
    expect(resultado.min).toBeLessThan(resultado.max);
  });

  it('deve gerar um valorMag min menor que um valorMag max', () =>{
    this.serviceValorMag = new GeraMinMaxService<ValorMag>();
    var resultado = this.serviceValorMag.getValorMag(this.seed);
    expect(resultado).toBeDefined();
    if (resultado.min.magnitude == resultado.max.magnitude){
      expect(resultado.min.valor).toBeLessThan(resultado.max.valor);
    }else{
      expect(resultado.min.magnitude).toBeLessThan(resultado.max.magnitude);
    }
  })
});
