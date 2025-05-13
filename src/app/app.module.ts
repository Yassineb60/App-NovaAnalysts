import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnomalyViewerComponent } from './components/anomaly-viewer/anomaly-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PredictRevenueComponent } from './components/predict-revenue/predict-revenue.component';
import { HomeComponent } from './components/home/home.component';
import { PredictDelayComponent } from './components/predict-delay/predict-delay.component';
import { LoginComponent } from './pages/login/login.component';
import { LitigeComponent } from './litige/litige.component';
import { SafePipe } from './safe.pipe';
import { AboutComponent } from './pages/about/about.component';
import { HttpClient } from '@angular/common/http';
import { ForecastErrorsComponent } from './forecast-errors/forecast-errors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Page1Component } from './powerbi/page1/page1.component';
import { Page2Component } from './powerbi/page2/page2.component';
import { Page3Component } from './powerbi/page3/page3.component';
import { Page4Component } from './powerbi/page4/page4.component';
import { Page5Component } from './powerbi/page5/page5.component';
import { DashboardsHomeComponent } from './dashboards-home/dashboards-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnomalyViewerComponent,
    PredictRevenueComponent,
    HomeComponent,
    PredictDelayComponent,
    LoginComponent,
    LitigeComponent,
    SafePipe,
    AboutComponent,
    ForecastErrorsComponent,
    WelcomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    DashboardsHomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
