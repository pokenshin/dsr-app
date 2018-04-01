import { TestBed, inject } from '@angular/core/testing';

import { GeraSerService } from './gera-ser.service';

describe('GeraSerService', () => {
  let service: GeraSerService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraSerService]
    });
    this.service = new GeraSerService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraSerService], (service: GeraSerService) => {
    expect(service).toBeTruthy();
  }));

  it ('deve gerar um ser completa', () =>{
    var resultado = this.service.get(seed);
    console.log(resultado);
    expect(resultado).toBeDefined();
  })
});
