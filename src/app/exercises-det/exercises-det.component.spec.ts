import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesDetComponent } from './exercises-det.component';

describe('ExercisesDetComponent', () => {
  let component: ExercisesDetComponent;
  let fixture: ComponentFixture<ExercisesDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
