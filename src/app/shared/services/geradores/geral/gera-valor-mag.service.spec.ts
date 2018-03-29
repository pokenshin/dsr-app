import { TestBed, inject } from '@angular/core/testing';
import { GeraValorMagService } from './gera-valor-mag.service';
import { ValorMag } from '../../../classes/valormag';
import { GeraInteiroService } from './gera-inteiro.service';

describe('GeraValorMagService', () => {
  let service: GeraValorMagService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraValorMagService]
    });
    this.service = new GeraValorMagService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraValorMagService], (service: GeraValorMagService) => {
    expect(service).toBeTruthy();
  }));

  it('gera um ValorMag aleatorio', () => {
    this.service = new GeraValorMagService();
    var result = this.service.get(this.seed);
    expect(result.magnitude).toBeGreaterThan(0);
    expect(result.valor).toBeGreaterThan(0);
  })

  it('gera um ValorMag entre 10m2 e 99m5', () =>{
    this.service = new GeraValorMagService();
    var valMin = new ValorMag(10, 2);
    var valMax = new ValorMag(99, 5);
    var result = this.service.getEntre(this.seed, valMin, valMax);
    expect(result.valor).toBeGreaterThan(9);
    expect(result.valor).toBeLessThan(100);
    expect(result.magnitude).toBeGreaterThan(1);
    expect(result.magnitude).toBeLessThan(6);
  })
});
