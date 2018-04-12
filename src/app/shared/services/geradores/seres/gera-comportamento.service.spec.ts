import { TestBed, inject } from '@angular/core/testing';

import { GeraComportamentoService } from './gera-comportamento-service';

describe('GeraNaturezaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraComportamentoService]
    });
  });

  it('should be created', inject([GeraComportamentoService], (service: GeraComportamentoService) => {
    expect(service).toBeTruthy();
  }));
});
