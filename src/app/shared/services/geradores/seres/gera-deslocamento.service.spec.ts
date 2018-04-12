import { TestBed, inject } from '@angular/core/testing';

import { GeraDeslocamentoService } from './gera-deslocamento.service';

describe('GeraDeslocamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraDeslocamentoService]
    });
  });

  it('should be created', inject([GeraDeslocamentoService], (service: GeraDeslocamentoService) => {
    expect(service).toBeTruthy();
  }));
});
