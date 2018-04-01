import { TestBed, inject } from '@angular/core/testing';

import { GeraVestivelService } from './gera-vestivel.service';

describe('GeraVestivelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraVestivelService]
    });
  });

  it('should be created', inject([GeraVestivelService], (service: GeraVestivelService) => {
    expect(service).toBeTruthy();
  }));
});
