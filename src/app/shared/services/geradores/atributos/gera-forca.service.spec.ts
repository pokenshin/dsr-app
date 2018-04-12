import { TestBed, inject } from '@angular/core/testing';

import { GeraForcaService } from './';
import { Forca } from 'shared/core/ser/atributos';

describe('GeraForcaService', () => {
  let service: GeraForcaService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraForcaService]
    });
    this.service = new GeraForcaService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraForcaService], (service: GeraForcaService) => {
    expect(this.service).toBeTruthy();
  }));

  it ('gera uma Forca válida', () =>{
    var result = this.service.get(this.seed);
    expect(result).toBeDefined();
  })
});
