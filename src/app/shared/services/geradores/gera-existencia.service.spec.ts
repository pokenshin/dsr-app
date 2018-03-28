import { TestBed, inject } from '@angular/core/testing';

import { GeraExistenciaService } from './gera-existencia.service';

describe('GeraExistenciaService', () => {
    let service: GeraExistenciaService;
    let seed: number;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [GeraExistenciaService]
      });
      this.service = new GeraExistenciaService();
      this.seed = Math.random();
    });
  
    it('should be created', inject([GeraExistenciaService], (service: GeraExistenciaService) => {
      expect(this.service).toBeTruthy();
    }));
  
    it ('gera uma Existência válida', () =>{
      var result = this.service.get(this.seed);
      expect(result).toBeDefined();
    })
  });
