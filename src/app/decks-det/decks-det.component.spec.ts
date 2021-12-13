import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksDetComponent } from './decks-det.component';

describe('DecksDetComponent', () => {
  let component: DecksDetComponent;
  let fixture: ComponentFixture<DecksDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecksDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecksDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
