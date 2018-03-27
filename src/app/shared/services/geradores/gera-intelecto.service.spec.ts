import { TestBed, inject } from '@angular/core/testing';

import { GeraIntelectoService } from './gera-intelecto.service';

describe('GeraIntelectoService', () => {
  let service: GeraIntelectoService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraIntelectoService]
    });
    this.service = new GeraIntelectoService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraIntelectoService], (service: GeraIntelectoService) => {
    expect(this.service).toBeTruthy();
  }));

  it('gera um Intelecto válida', () =>{
    var result = this.service.get(this.seed);
    console.log(result);
    expect(result).toBeDefined();
  })
});
