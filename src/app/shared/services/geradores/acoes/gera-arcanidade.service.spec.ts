import { TestBed, inject } from '@angular/core/testing';

import { GeraArcanidadeService } from './gera-arcanidade.service';

describe('GeraArcanidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraArcanidadeService]
    });
  });

  it('should be created', inject([GeraArcanidadeService], (service: GeraArcanidadeService) => {
    expect(service).toBeTruthy();
  }));
});
