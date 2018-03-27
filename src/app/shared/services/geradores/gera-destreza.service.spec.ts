import { TestBed, inject } from '@angular/core/testing';

import { GeraDestrezaService } from './gera-destreza.service';

describe('GeraDestrezaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraDestrezaService]
    });
  });

  it('should be created', inject([GeraDestrezaService], (service: GeraDestrezaService) => {
    expect(service).toBeTruthy();
  }));
});
