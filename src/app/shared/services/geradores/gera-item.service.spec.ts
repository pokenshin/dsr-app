import { TestBed, inject } from '@angular/core/testing';

import { GeraItemService } from './gera-item.service';

describe('GeraItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraItemService]
    });
  });

  it('should be created', inject([GeraItemService], (service: GeraItemService) => {
    expect(service).toBeTruthy();
  }));
});
