import { TestBed, inject } from '@angular/core/testing';

import { GeraTaxonomiaService } from './gera-taxonomia.service';

describe('GeraTaxonomiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraTaxonomiaService]
    });
  });

  it('should be created', inject([GeraTaxonomiaService], (service: GeraTaxonomiaService) => {
    expect(service).toBeTruthy();
  }));
});
