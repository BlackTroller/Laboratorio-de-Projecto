import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDetComponent } from './cards-det.component';

describe('CardsDetComponent', () => {
  let component: CardsDetComponent;
  let fixture: ComponentFixture<CardsDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
