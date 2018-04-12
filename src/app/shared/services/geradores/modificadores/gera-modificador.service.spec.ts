import { TestBed, inject } from '@angular/core/testing';

import { GeraModificadorService } from 'shared/services/geradores/modificadores';

describe('GeraModificadorService', () => {
  let service: GeraModificadorService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraModificadorService]
    });
    this.service = new GeraModificadorService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraModificadorService], (service: GeraModificadorService) => {
    expect(this.service).toBeTruthy();
  }));

  it('gera um Modificador válido', () =>{
    var result = this.service.get(this.seed);
    expect(result).toBeDefined();
  })
});
