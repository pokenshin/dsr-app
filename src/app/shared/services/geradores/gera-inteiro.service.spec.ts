import { TestBed, inject } from '@angular/core/testing';

import { GeraInteiroService } from './gera-inteiro.service';

describe('GeraInteiroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraInteiroService]
    });
  });

  it('should be created', inject([GeraInteiroService], (service: GeraInteiroService) => {
    expect(service).toBeTruthy();
  }));
});
