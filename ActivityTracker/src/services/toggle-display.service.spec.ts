import { TestBed } from '@angular/core/testing';

import { ToggleDisplayService } from './toggle-display.service';

describe('ToggleDisplayService', () => {
  let service: ToggleDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
