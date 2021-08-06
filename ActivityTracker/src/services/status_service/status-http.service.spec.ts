import { TestBed } from '@angular/core/testing';

import { StatusHttpService } from './status-http.service';

describe('StatusHttpService', () => {
  let service: StatusHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
