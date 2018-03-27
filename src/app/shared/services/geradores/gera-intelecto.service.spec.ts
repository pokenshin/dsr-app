import { TestBed, inject } from '@angular/core/testing';

import { GeraIntelectoService } from './gera-intelecto.service';

describe('GeraIntelectoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraIntelectoService]
    });
  });

  it('should be created', inject([GeraIntelectoService], (service: GeraIntelectoService) => {
    expect(service).toBeTruthy();
  }));
});
