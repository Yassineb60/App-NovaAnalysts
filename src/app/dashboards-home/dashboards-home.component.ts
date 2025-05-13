import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service'; // adapte si besoin

@Component({
  selector: 'app-dashboards-home',
  templateUrl: './dashboards-home.component.html',
  styleUrls: ['./dashboards-home.component.css']
})
export class DashboardsHomeComponent {
  constructor(public role: RoleService, private router: Router) {}

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
