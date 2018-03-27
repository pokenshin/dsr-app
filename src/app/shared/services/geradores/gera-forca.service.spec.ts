import { TestBed, inject } from '@angular/core/testing';

import { GeraForcaService } from './gera-forca.service';
import { Forca } from '../../classes/atributos/forca';

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
    console.log(result);
    expect(result).toBeDefined();
  })
});
