import { TestBed, inject } from '@angular/core/testing';

import { GeraCarismaService } from './gera-carisma.service';

describe('GeraCarismaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraCarismaService]
    });
  });

  it('should be created', inject([GeraCarismaService], (service: GeraCarismaService) => {
    expect(service).toBeTruthy();
  }));
});
