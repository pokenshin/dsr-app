import { TestBed, inject } from '@angular/core/testing';

import { GeraDuracaoService } from './gera-duracao.service';

describe('GeraDuracaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraDuracaoService]
    });
  });

  it('should be created', inject([GeraDuracaoService], (service: GeraDuracaoService) => {
    expect(service).toBeTruthy();
  }));
});
