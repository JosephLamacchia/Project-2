import { TestBed } from '@angular/core/testing';

import { TaskpriorityService } from './taskp.service';

describe('TaskpriorityService', () => {
  let service: TaskpriorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskpriorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
