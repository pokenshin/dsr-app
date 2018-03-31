import { TestBed, inject } from '@angular/core/testing';

import { GeraEspecieService } from './gera-especie.service';
import { Especie } from '../../classes/ser/especie';

describe('GeraEspecieService', () => {
  let service: GeraEspecieService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraEspecieService]
    });
    this.service = new GeraEspecieService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraEspecieService], (service: GeraEspecieService) => {
    expect(service).toBeTruthy();
  }));

  it ('deve gerar uma espécie completa', () =>{
    var resultado = this.service.get(seed);
    console.log(resultado);
    expect(resultado).toBeDefined();
  })
});
