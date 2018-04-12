import { TestBed, inject } from '@angular/core/testing';

import { GeraRealidadeService } from './gera-realidade.service';

describe('GeraRealidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraRealidadeService]
    });
  });

  it('should be created', inject([GeraRealidadeService], (service: GeraRealidadeService) => {
    expect(service).toBeTruthy();
  }));
});
