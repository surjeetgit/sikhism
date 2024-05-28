import { TestBed } from '@angular/core/testing';

import { MobiledataserviceService } from './mobiledataservice.service';

describe('MobiledataserviceService', () => {
  let service: MobiledataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobiledataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
