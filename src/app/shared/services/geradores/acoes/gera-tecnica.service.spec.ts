import { TestBed, inject } from '@angular/core/testing';

import { GeraTecnicaService } from './gera-tecnica.service';

describe('GeraTecnicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraTecnicaService]
    });
  });

  it('should be created', inject([GeraTecnicaService], (service: GeraTecnicaService) => {
    expect(service).toBeTruthy();
  }));
});
