import { TestBed } from '@angular/core/testing';

import { TaskTypeHttpService } from './taskt-http.service';

describe('TaskTypeHttpService', () => {
  let service: TaskTypeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTypeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
