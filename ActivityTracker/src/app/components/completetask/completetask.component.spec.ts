import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletetaskComponent } from './completetask.component';

describe('CompletetaskComponent', () => {
  let component: CompletetaskComponent;
  let fixture: ComponentFixture<CompletetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletetaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
