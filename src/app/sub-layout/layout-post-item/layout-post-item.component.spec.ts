import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPostItemComponent } from './layout-post-item.component';

describe('LayoutPostItemComponent', () => {
  let component: LayoutPostItemComponent;
  let fixture: ComponentFixture<LayoutPostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
