import { TestBed, inject } from '@angular/core/testing';

import { GeraAtributosService } from './';

describe('GeraAtributosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraAtributosService]
    });
  });

  it('should be created', inject([GeraAtributosService], (service: GeraAtributosService) => {
    expect(service).toBeTruthy();
  }));
});
