import { TestBed, inject } from '@angular/core/testing';

import { GeraCriatividadeService } from './';

describe('GeraCriatividadeService', () => {
  let service: GeraCriatividadeService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraCriatividadeService]
    });
    this.service = new GeraCriatividadeService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraCriatividadeService], (service: GeraCriatividadeService) => {
    expect(service).toBeTruthy();
  }));

  it ('gera uma Criatividade válida', () =>{
    var result = this.service.get(this.seed);
    expect(result).toBeDefined();
  })
});
