import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomalyViewerComponent } from './anomaly-viewer.component';

describe('AnomalyViewerComponent', () => {
  let component: AnomalyViewerComponent;
  let fixture: ComponentFixture<AnomalyViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnomalyViewerComponent]
    });
    fixture = TestBed.createComponent(AnomalyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
