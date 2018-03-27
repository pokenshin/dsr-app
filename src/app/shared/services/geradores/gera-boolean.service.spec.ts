import { TestBed, inject } from '@angular/core/testing';

import { GeraBooleanService } from './gera-boolean.service';

describe('GeraBooleanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraBooleanService]
    });
  });

  it('should be created', inject([GeraBooleanService], (service: GeraBooleanService) => {
    expect(service).toBeTruthy();
  }));
});
