import { TestBed, inject } from '@angular/core/testing';

import { GeraCriatividadeService } from './gera-criatividade.service';

describe('GeraCriatividadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraCriatividadeService]
    });
  });

  it('should be created', inject([GeraCriatividadeService], (service: GeraCriatividadeService) => {
    expect(service).toBeTruthy();
  }));
});
