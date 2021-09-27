import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContestantComponent } from './update-contestant.component';

describe('UpdateContestantComponent', () => {
  let component: UpdateContestantComponent;
  let fixture: ComponentFixture<UpdateContestantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContestantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
