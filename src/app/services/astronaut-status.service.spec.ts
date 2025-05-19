import { TestBed } from '@angular/core/testing';

import { AstronautStatusService } from './astronaut-status.service';

describe('AstronautStatusService', () => {
  let service: AstronautStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstronautStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
