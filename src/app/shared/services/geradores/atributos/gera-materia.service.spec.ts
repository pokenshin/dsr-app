import { TestBed, inject } from '@angular/core/testing';

import { GeraMateriaService } from './';

describe('GeraMateriaService', () => {
  let service: GeraMateriaService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraMateriaService]
    });
    this.service = new GeraMateriaService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraMateriaService], (service: GeraMateriaService) => {
    expect(this.service).toBeTruthy();
  }));

  it('gera uma Materia válida', () =>{
    var result = this.service.get(this.seed);
    expect(result).toBeDefined();
  })
});
