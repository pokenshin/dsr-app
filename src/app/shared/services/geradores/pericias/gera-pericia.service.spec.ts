import { TestBed, inject } from '@angular/core/testing';

import { GeraPericiaService } from './gera-pericia.service';

describe('GeraPericiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraPericiaService]
    });
  });

  it('should be created', inject([GeraPericiaService], (service: GeraPericiaService) => {
    expect(service).toBeTruthy();
  }));
});
