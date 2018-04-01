import { TestBed, inject } from '@angular/core/testing';

import { GeraPosseService } from './gera-posse.service';

describe('GeraPosseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeraPosseService]
    });
  });

  it('should be created', inject([GeraPosseService], (service: GeraPosseService) => {
    expect(service).toBeTruthy();
  }));
});
