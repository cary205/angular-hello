import { TestBed } from '@angular/core/testing';

import { FuliService } from './fuli.service';

describe('FuliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuliService = TestBed.get(FuliService);
    expect(service).toBeTruthy();
  });
});
