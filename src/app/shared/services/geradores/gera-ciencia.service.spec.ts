import { TestBed, inject } from '@angular/core/testing';

import { GeraCienciaService } from './gera-ciencia.service';

describe('GeraCienciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraCienciaService]
    });
  });

  it('should be created', inject([GeraCienciaService], (service: GeraCienciaService) => {
    expect(service).toBeTruthy();
  }));
});
