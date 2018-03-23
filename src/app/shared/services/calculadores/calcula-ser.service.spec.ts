import { TestBed, inject } from '@angular/core/testing';

import { CalculaSerService } from './calcula-ser.service';

describe('CalculaSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculaSerService]
    });
  });

  it('should be created', inject([CalculaSerService], (service: CalculaSerService) => {
    expect(service).toBeTruthy();
  }));
});
