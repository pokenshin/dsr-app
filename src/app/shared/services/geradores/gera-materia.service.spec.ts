import { TestBed, inject } from '@angular/core/testing';

import { GeraMateriaService } from './gera-materia.service';

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

  it('deve gerar uma Materia válida', () =>{
    var result = this.service.get(this.seed);
    console.log(result);
    expect(result).toBeDefined();
  })
});
