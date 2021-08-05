import { TestBed } from '@angular/core/testing';

import { EmployeeHttpService } from './employee-http.service';

describe('EmployeeHttpService', () => {
  let service: EmployeeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
