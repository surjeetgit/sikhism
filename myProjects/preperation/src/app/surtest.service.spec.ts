import { TestBed } from '@angular/core/testing';

import { SurtestService } from './surtest.service';

describe('SurtestService', () => {
  let service: SurtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
