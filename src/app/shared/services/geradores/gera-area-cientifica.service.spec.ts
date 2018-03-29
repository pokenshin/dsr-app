import { TestBed, inject } from '@angular/core/testing';

import { GeraAreaCientificaService } from './gera-area-cientifica.service';

describe('GeraAreaCientificaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraAreaCientificaService]
    });
  });

  it('should be created', inject([GeraAreaCientificaService], (service: GeraAreaCientificaService) => {
    expect(service).toBeTruthy();
  }));
});
