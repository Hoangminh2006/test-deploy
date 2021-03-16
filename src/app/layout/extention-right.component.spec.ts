import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtentionRightComponent } from './extention-right.component';

describe('ExtentionRightComponent', () => {
  let component: ExtentionRightComponent;
  let fixture: ComponentFixture<ExtentionRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtentionRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtentionRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
