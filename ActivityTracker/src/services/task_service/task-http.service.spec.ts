import { TestBed } from '@angular/core/testing';

import { TaskHttpService } from './task-http.service';

describe('TaskHttpService', () => {
  let service: TaskHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
