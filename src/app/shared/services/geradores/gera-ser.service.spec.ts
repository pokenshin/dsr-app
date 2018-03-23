import { TestBed, inject } from '@angular/core/testing';

import { GeraSerService } from './gera-ser.service';

describe('GeraSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraSerService]
    });
  });

  it('should be created', inject([GeraSerService], (service: GeraSerService) => {
    expect(service).toBeTruthy();
  }));
});
