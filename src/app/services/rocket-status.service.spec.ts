import { TestBed } from '@angular/core/testing';

import { RocketStatusService } from './rocket-status.service';

describe('RocketStatusService', () => {
  let service: RocketStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
