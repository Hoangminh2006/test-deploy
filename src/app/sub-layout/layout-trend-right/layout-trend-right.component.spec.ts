import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTrendRightComponent } from './layout-trend-right.component';

describe('LayoutTrendRightComponent', () => {
  let component: LayoutTrendRightComponent;
  let fixture: ComponentFixture<LayoutTrendRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTrendRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTrendRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
