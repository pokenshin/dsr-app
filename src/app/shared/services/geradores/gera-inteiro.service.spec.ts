import { TestBed, inject } from '@angular/core/testing';

import { GeraInteiroService } from './gera-inteiro.service';

describe('GeraInteiroService', () => {
  let service: GeraInteiroService;
  let seed: number;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraInteiroService]
    });
    service = new GeraInteiroService();
    seed = Math.random();
  });

  it('should be created', inject([GeraInteiroService], (service: GeraInteiroService) => {
    expect(service).toBeTruthy();
  }));

  it('gera um numero válido', () =>{
    var result = service.get(seed);
    expect(result).toBeDefined();
  })

  it('gera um numero entre 10 e 100', () =>{
    var result = service.getEntre(seed, 10, 100);
    expect(result).toBeGreaterThan(9);
    expect(result).toBeLessThan(101);
  })
});
