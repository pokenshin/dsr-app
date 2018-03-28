import { TestBed, inject } from '@angular/core/testing';

import { GeraEspecieService } from './gera-especie.service';

describe('GeraEspecieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraEspecieService]
    });
  });

  it('should be created', inject([GeraEspecieService], (service: GeraEspecieService) => {
    expect(service).toBeTruthy();
  }));
});
