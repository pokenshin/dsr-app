import { TestBed, inject } from '@angular/core/testing';

import { GeraAlvoHabilidadeService } from './gera-alvo-habilidade.service';

describe('GeraAlvoHabilidadeService', () => {
  let service: GeraAlvoHabilidadeService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraAlvoHabilidadeService]
    });
    this.service = new GeraAlvoHabilidadeService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraAlvoHabilidadeService], (service: GeraAlvoHabilidadeService) => {
    expect(service).toBeTruthy();
  }));

  it ('gera uma Criatividade válida', () =>{
    var result = this.service.get(this.seed);
    expect(result).toBeDefined();
  })
});
