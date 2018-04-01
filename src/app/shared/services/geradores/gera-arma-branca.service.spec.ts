import { TestBed, inject } from '@angular/core/testing';

import { GeraArmaBrancaService } from './gera-arma-branca.service';

describe('GeraArmaBrancaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraArmaBrancaService]
    });
  });

  it('should be created', inject([GeraArmaBrancaService], (service: GeraArmaBrancaService) => {
    expect(service).toBeTruthy();
  }));
});
