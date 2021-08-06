import { TestBed } from '@angular/core/testing';

import { TaskpriorityHttpService } from './taskp-http.service';

describe('TaskpriorityHttpService', () => {
  let service: TaskpriorityHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskpriorityHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
