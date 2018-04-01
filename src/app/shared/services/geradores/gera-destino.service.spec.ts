import { TestBed, inject } from '@angular/core/testing';

import { GeraDestinoService } from './gera-destino.service';

describe('GeraDestinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraDestinoService]
    });
  });

  it('should be created', inject([GeraDestinoService], (service: GeraDestinoService) => {
    expect(service).toBeTruthy();
  }));
});
