import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWhoFollowComponent } from './layout-who-follow.component';

describe('LayoutWhoFollowComponent', () => {
  let component: LayoutWhoFollowComponent;
  let fixture: ComponentFixture<LayoutWhoFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWhoFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWhoFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
