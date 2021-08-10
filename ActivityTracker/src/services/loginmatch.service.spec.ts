import { TestBed } from '@angular/core/testing';

import { LoginmatchService } from './loginmatch.service';

describe('LoginmatchService', () => {
  let service: LoginmatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginmatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
