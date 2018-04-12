import { TestBed, inject } from '@angular/core/testing';

import { GeraMunicaoService } from './gera-municao.service';

describe('GeraMunicaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraMunicaoService]
    });
  });

  it('should be created', inject([GeraMunicaoService], (service: GeraMunicaoService) => {
    expect(service).toBeTruthy();
  }));
});
