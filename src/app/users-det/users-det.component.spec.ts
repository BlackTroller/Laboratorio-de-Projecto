import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetComponent } from './users-det.component';

describe('UsersDetComponent', () => {
  let component: UsersDetComponent;
  let fixture: ComponentFixture<UsersDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
