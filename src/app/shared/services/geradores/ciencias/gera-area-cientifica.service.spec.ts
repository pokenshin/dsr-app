import { TestBed, inject } from '@angular/core/testing';

import { GeraAreaCientificaService } from './';

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
