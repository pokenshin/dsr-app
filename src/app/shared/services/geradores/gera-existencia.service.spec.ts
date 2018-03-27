import { TestBed, inject } from '@angular/core/testing';

import { GeraExistenciaService } from './gera-existencia.service';

describe('GeraExistenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraExistenciaService]
    });
  });

  it('should be created', inject([GeraExistenciaService], (service: GeraExistenciaService) => {
    expect(service).toBeTruthy();
  }));
});
