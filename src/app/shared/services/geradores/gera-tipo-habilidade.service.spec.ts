import { TestBed, inject } from '@angular/core/testing';

import { GeraTipoHabilidadeService } from './gera-tipo-habilidade.service';

describe('GeraTipoHabilidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraTipoHabilidadeService]
    });
  });

  it('should be created', inject([GeraTipoHabilidadeService], (service: GeraTipoHabilidadeService) => {
    expect(service).toBeTruthy();
  }));
});
