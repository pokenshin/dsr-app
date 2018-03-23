import { TestBed, inject } from '@angular/core/testing';

import { GeraAtributoService } from './gera-atributo.service';

describe('GeraAtributoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraAtributoService]
    });
  });

  it('should be created', inject([GeraAtributoService], (service: GeraAtributoService) => {
    expect(service).toBeTruthy();
  }));
});
