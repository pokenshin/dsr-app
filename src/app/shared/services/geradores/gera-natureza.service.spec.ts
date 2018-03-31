import { TestBed, inject } from '@angular/core/testing';

import { GeraNaturezaService } from './gera-natureza.service';

describe('GeraNaturezaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraNaturezaService]
    });
  });

  it('should be created', inject([GeraNaturezaService], (service: GeraNaturezaService) => {
    expect(service).toBeTruthy();
  }));
});
