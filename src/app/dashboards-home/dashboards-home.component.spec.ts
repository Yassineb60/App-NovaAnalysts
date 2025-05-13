import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsHomeComponent } from './dashboards-home.component';

describe('DashboardsHomeComponent', () => {
  let component: DashboardsHomeComponent;
  let fixture: ComponentFixture<DashboardsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsHomeComponent]
    });
    fixture = TestBed.createComponent(DashboardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
