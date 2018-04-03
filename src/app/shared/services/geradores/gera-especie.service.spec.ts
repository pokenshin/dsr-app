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
    console.log("Teste básico de especie iniciado.");
    expect(service).toBeTruthy();
    console.log("Teste básico de especie finalizado.");
  }));

  it ('deve gerar uma espécie completa', () =>{
    console.log("Teste avançado de especie iniciado.");
    var resultado = this.service.get(this.seed);
    expect(resultado).toBeDefined();
    console.log("Teste avançado de especie finalizado.");
    console.log(resultado);
  })
});
