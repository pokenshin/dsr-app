import { TestBed, inject } from '@angular/core/testing';

import { CalculaSerService } from './';

describe('CalculaSerService', () => {
  let service: CalculaSerService;
  let seed: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculaSerService]
    });
    this.service = new CalculaSerService();
  });

  it('should be created', inject([CalculaSerService], (service: CalculaSerService) => {
    expect(service).toBeTruthy();
  }));
});
