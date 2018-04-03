import { TestBed, inject } from '@angular/core/testing';

import { GeraElementaisService } from './gera-elementais.service';

describe('GeraElementaisService', () => {
  let service: GeraElementaisService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraElementaisService]
    });
    this.service = new GeraElementaisService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraElementaisService], (service: GeraElementaisService) => {
    expect(service).toBeTruthy();
  }));

  it('popula elementais corretamente', () =>{
    var result = this.service.get(this.seed);
    expect(result).toBeDefined();
  })
});
