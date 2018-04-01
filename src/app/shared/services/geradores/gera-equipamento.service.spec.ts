import { TestBed, inject } from '@angular/core/testing';

import { GeraEquipamentoService } from './gera-equipamento.service';

describe('GeraEquipamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraEquipamentoService]
    });
  });

  it('should be created', inject([GeraEquipamentoService], (service: GeraEquipamentoService) => {
    expect(service).toBeTruthy();
  }));
});
