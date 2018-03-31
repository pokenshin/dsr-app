import { TestBed, inject } from '@angular/core/testing';

import { GeraPlanoService } from './gera-plano.service';

describe('GeraPlanoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraPlanoService]
    });
  });

  it('should be created', inject([GeraPlanoService], (service: GeraPlanoService) => {
    expect(service).toBeTruthy();
  }));
});
