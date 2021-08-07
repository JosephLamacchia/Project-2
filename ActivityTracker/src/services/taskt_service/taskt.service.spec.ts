import { TestBed } from '@angular/core/testing';

import { TaskTypeService } from './taskt.service';

describe('TaskTypeService', () => {
  let service: TaskTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
