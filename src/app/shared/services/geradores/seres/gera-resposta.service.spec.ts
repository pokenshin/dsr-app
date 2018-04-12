import { TestBed, inject } from '@angular/core/testing';

import { GeraRespostaService } from './gera-resposta.service';

describe('GeraRespostaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraRespostaService]
    });
  });

  it('should be created', inject([GeraRespostaService], (service: GeraRespostaService) => {
    expect(service).toBeTruthy();
  }));
});
