import { TestBed, inject } from '@angular/core/testing';

import { GeraHabilidadeService } from './gera-habilidade.service';

describe('GeraHabilidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraHabilidadeService]
    });
  });

  it('should be created', inject([GeraHabilidadeService], (service: GeraHabilidadeService) => {
    expect(service).toBeTruthy();
  }));
});
