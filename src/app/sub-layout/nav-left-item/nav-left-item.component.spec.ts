import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftItemComponent } from './nav-left-item.component';

describe('NavLeftItemComponent', () => {
  let component: NavLeftItemComponent;
  let fixture: ComponentFixture<NavLeftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLeftItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLeftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
