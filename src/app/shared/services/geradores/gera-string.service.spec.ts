import { TestBed, inject } from '@angular/core/testing';

import { GeraStringService } from './gera-string.service';

describe('GeraStringService', () => {
  let service: GeraStringService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraStringService]
    });
    this.service = new GeraStringService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraStringService], (service: GeraStringService) => {
    expect(service).toBeTruthy();
  }));

  it('deve gerar uma string', () => {
    this.service = new GeraStringService();
    var resultado = this.service.get(this.seed);
    expect(resultado).toBeDefined();
  })

  it('gerarEntre deve gerar uma string maior que 3 e menor que 12', () =>{
    this.service = new GeraStringService();
    var resultado = this.service.getTamanhoEspecifico(this.seed, 3, 12);
    expect(resultado.length).toBeGreaterThan(2);
    expect(resultado.length).toBeLessThan(13);
    console.log("String aleatória: " + resultado);
  })
});
