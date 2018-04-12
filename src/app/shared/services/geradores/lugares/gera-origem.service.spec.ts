import { TestBed, inject } from '@angular/core/testing';

import { GeraOrigemService } from './gera-origem.service';

describe('GeraOrigemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraOrigemService]
    });
  });

  it('should be created', inject([GeraOrigemService], (service: GeraOrigemService) => {
    expect(service).toBeTruthy();
  }));
});
