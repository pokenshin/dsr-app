import { TestBed, inject } from '@angular/core/testing';

import { GeraMaterialService } from './gera-material.service';

describe('GeraMaterialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraMaterialService]
    });
  });

  it('should be created', inject([GeraMaterialService], (service: GeraMaterialService) => {
    expect(service).toBeTruthy();
  }));
});
