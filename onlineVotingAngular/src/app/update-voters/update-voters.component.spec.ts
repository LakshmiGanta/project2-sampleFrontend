import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVotersComponent } from './update-voters.component';

describe('UpdateVotersComponent', () => {
  let component: UpdateVotersComponent;
  let fixture: ComponentFixture<UpdateVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
