import { TestBed } from '@angular/core/testing';

import { DepartmentHttpService } from './department-http.service';

describe('DepartmentHttpService', () => {
  let service: DepartmentHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
