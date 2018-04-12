import { TestBed, inject } from '@angular/core/testing';

import { GeraConsumivelService } from './gera-consumivel.service';

describe('GeraConsumivelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraConsumivelService]
    });
  });

  it('should be created', inject([GeraConsumivelService], (service: GeraConsumivelService) => {
    expect(service).toBeTruthy();
  }));
});
