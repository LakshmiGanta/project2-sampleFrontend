import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestantRegistrationComponent } from './contestant-registration.component';

describe('ContestantRegistrationComponent', () => {
  let component: ContestantRegistrationComponent;
  let fixture: ComponentFixture<ContestantRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestantRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
