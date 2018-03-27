import { TestBed, inject } from '@angular/core/testing';

import { GeraIdeiaService } from './gera-ideia.service';

describe('GeraIdeiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraIdeiaService]
    });
  });

  it('should be created', inject([GeraIdeiaService], (service: GeraIdeiaService) => {
    expect(service).toBeTruthy();
  }));
});
