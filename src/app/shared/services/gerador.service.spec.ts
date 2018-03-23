import { TestBed, inject } from '@angular/core/testing';

import { GeradorService } from './gerador.service';

describe('GeradorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeradorService]
    });
  });

  it('should be created', inject([GeradorService], (service: GeradorService) => {
    expect(service).toBeTruthy();
  }));
});
