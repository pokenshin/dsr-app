import { TestBed, inject } from '@angular/core/testing';

import { GeraTipoAcaoService } from './gera-tipo-acao.service';

describe('GeraTipoAcaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraTipoAcaoService]
    });
  });

  it('should be created', inject([GeraTipoAcaoService], (service: GeraTipoAcaoService) => {
    expect(service).toBeTruthy();
  }));
});
