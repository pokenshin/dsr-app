import { TestBed, inject } from '@angular/core/testing';

import { GeraDestrezaService } from './gera-destreza.service';

describe('GeraDestrezaService', () => {
  let service: GeraDestrezaService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraDestrezaService]
    });
    this.service = new GeraDestrezaService();
    this.seed = Math.random();
  });

  it('should be created', inject([GeraDestrezaService], (service: GeraDestrezaService) => {
    expect(service).toBeTruthy();
  }));

  it ('gera uma Destreza válida', () =>{
    var result = this.service.get(this.seed);
    console.log(result);
    expect(result).toBeDefined();
  })
});
