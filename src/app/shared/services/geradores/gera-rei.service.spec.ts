import { TestBed, inject } from '@angular/core/testing';

import { GeraReiService } from './gera-rei.service';

describe('GeraReiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraReiService]
    });
  });

  it('should be created', inject([GeraReiService], (service: GeraReiService) => {
    expect(service).toBeTruthy();
  }));
});
