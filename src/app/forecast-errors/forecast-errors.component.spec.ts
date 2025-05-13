import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastErrorsComponent } from './forecast-errors.component';

describe('ForecastErrorsComponent', () => {
  let component: ForecastErrorsComponent;
  let fixture: ComponentFixture<ForecastErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastErrorsComponent]
    });
    fixture = TestBed.createComponent(ForecastErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
