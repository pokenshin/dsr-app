import { TestBed, inject } from '@angular/core/testing';

import { GeraIndoleService } from './gera-indole.service';

describe('GeraIndoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraIndoleService]
    });
  });

  it('should be created', inject([GeraIndoleService], (service: GeraIndoleService) => {
    expect(service).toBeTruthy();
  }));
});
