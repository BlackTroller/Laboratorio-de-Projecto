import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksaddComponent } from './decksadd.component';

describe('DecksaddComponent', () => {
  let component: DecksaddComponent;
  let fixture: ComponentFixture<DecksaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecksaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecksaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
