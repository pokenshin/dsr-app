import { TestBed, inject } from '@angular/core/testing';

import { GeraMateriaService } from './gera-materia.service';

describe('GeraMateriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraMateriaService]
    });
  });

  it('should be created', inject([GeraMateriaService], (service: GeraMateriaService) => {
    expect(service).toBeTruthy();
  }));
});
