import { TestBed, inject } from '@angular/core/testing';

import { GeraAlvoAcaoService } from './gera-alvo-acao.service';

describe('GeraAlvoAcaoService', () => {
  let service: GeraAlvoAcaoService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraAlvoAcaoService]
    });
    this.service = new GeraAlvoAcaoService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraAlvoAcaoService], (service: GeraAlvoAcaoService) => {
    expect(service).toBeTruthy();
  }));

  it ('gera uma Criatividade válida', () =>{
    var result = this.service.get(this.seed);
    expect(result).toBeDefined();
  })
});
