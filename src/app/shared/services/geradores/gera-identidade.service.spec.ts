import { TestBed, inject } from '@angular/core/testing';

import { GeraIdentidadeService } from './gera-identidade.service';

describe('GeraIdentidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraIdentidadeService]
    });
  });

  it('should be created', inject([GeraIdentidadeService], (service: GeraIdentidadeService) => {
    expect(service).toBeTruthy();
  }));
});
