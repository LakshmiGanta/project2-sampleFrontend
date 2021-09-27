import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContestantComponent } from './delete-contestant.component';

describe('DeleteContestantComponent', () => {
  let component: DeleteContestantComponent;
  let fixture: ComponentFixture<DeleteContestantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContestantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
