import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesaddComponent } from './exercisesadd.component';

describe('ExercisesaddComponent', () => {
  let component: ExercisesaddComponent;
  let fixture: ComponentFixture<ExercisesaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
