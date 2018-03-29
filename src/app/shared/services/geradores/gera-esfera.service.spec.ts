import { TestBed, inject } from '@angular/core/testing';

import { GeraEsferaService } from './gera-esfera.service';

describe('GeraEsferaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraEsferaService]
    });
  });

  it('should be created', inject([GeraEsferaService], (service: GeraEsferaService) => {
    expect(service).toBeTruthy();
  }));
});
