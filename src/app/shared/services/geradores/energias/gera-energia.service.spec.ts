import { TestBed, inject } from '@angular/core/testing';

import { GeraEnergiaService } from 'shared/services/geradores/energias';

describe('GeraEnergiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraEnergiaService]
    });
  });

  it('should be created', inject([GeraEnergiaService], (service: GeraEnergiaService) => {
    //console.log(service.getLista(Math.random(), 10));
    expect(service).toBeTruthy();
    expect(service.getLista(Math.random(), 10)).toBeDefined();
  }));
});
