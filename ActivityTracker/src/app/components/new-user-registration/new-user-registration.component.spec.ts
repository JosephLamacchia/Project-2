import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserRegistrationComponent } from './new-user-registration.component';

describe('NewUserRegistrationComponent', () => {
  let component: NewUserRegistrationComponent;
  let fixture: ComponentFixture<NewUserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
