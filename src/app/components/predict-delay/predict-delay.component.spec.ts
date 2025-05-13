import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictDelayComponent } from './predict-delay.component';

describe('PredictDelayComponent', () => {
  let component: PredictDelayComponent;
  let fixture: ComponentFixture<PredictDelayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictDelayComponent]
    });
    fixture = TestBed.createComponent(PredictDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
