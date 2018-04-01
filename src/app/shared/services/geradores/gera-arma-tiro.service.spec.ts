import { TestBed, inject } from '@angular/core/testing';

import { GeraArmaTiroService } from './gera-arma-tiro.service';

describe('GeraArmaTiroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraArmaTiroService]
    });
  });

  it('should be created', inject([GeraArmaTiroService], (service: GeraArmaTiroService) => {
    expect(service).toBeTruthy();
  }));
});
