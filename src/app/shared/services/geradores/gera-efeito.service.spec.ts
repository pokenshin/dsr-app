import { TestBed, inject } from '@angular/core/testing';

import { GeraEfeitoService } from './gera-efeito.service';

describe('GeraEfeitoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraEfeitoService]
    });
  });

  it('should be created', inject([GeraEfeitoService], (service: GeraEfeitoService) => {
    expect(service).toBeTruthy();
  }));
});
