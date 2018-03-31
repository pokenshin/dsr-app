import { TestBed, inject } from '@angular/core/testing';

import { GeraTipoDuracaoService } from './gera-tipo-duracao.service';

describe('GeraTipoDuracaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraTipoDuracaoService]
    });
  });

  it('should be created', inject([GeraTipoDuracaoService], (service: GeraTipoDuracaoService) => {
    expect(service).toBeTruthy();
  }));
});
