import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnomalyViewerComponent } from './components/anomaly-viewer/anomaly-viewer.component';
import { PredictRevenueComponent } from './components/predict-revenue/predict-revenue.component';
import { PredictDelayComponent } from './components/predict-delay/predict-delay.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { LitigeComponent } from './litige/litige.component';
import { AboutComponent } from './pages/about/about.component';
import { ForecastErrorsComponent } from './forecast-errors/forecast-errors.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardsHomeComponent } from './dashboards-home/dashboards-home.component';
import { Page1Component } from './powerbi/page1/page1.component';
import { Page2Component } from './powerbi/page2/page2.component';
import { Page3Component } from './powerbi/page3/page3.component';
import { Page4Component } from './powerbi/page4/page4.component';
import { Page5Component } from './powerbi/page5/page5.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent }, // la page d'accueil publique
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'anomalies', component: AnomalyViewerComponent, canActivate: [AuthGuard] },
  { path: 'predict-revenue', component: PredictRevenueComponent, canActivate: [AuthGuard] },
  { path: 'predict-delay', component: PredictDelayComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'litige', component: LitigeComponent },
  { path: 'dashboards-home', component: DashboardsHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forecast-errors', component: ForecastErrorsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboards-home', component: DashboardsHomeComponent },

  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'page5', component: Page5Component }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
