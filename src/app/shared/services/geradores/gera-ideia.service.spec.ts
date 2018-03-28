import { TestBed, inject } from '@angular/core/testing';

import { GeraIdeiaService } from './gera-ideia.service';

describe('GeraIdeiaService', () => {
  let service: GeraIdeiaService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraIdeiaService]
    });
    this.service = new GeraIdeiaService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraIdeiaService], (service: GeraIdeiaService) => {
    expect(this.service).toBeTruthy();
  }));

  it ('gera uma Forca válida', () =>{
    var result = this.service.get(this.seed);
    console.log(result);
    expect(result).toBeDefined();
  })
});
