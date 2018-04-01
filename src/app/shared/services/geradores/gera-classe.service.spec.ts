import { TestBed, inject } from '@angular/core/testing';

import { GeraClasseService } from './gera-classe.service';

describe('GeraClasseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraClasseService]
    });
  });

  it('should be created', inject([GeraClasseService], (service: GeraClasseService) => {
    expect(service).toBeTruthy();
  }));
});
