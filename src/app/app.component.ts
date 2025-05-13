import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoleService } from './role.service'; // Assure-toi que ce service existe

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUrl: string = '';
  selectedRole: string;

  constructor(private router: Router, private roleService: RoleService) {
    // Suivre les changements d'URL
    this.router.events
      .pipe(filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });

    // Initialiser le rôle sélectionné depuis le RoleService
    this.selectedRole = this.roleService.getRole();
  }

  // ✅ Méthode appelée quand on change le rôle dans le menu
  changeRole(): void {
    this.roleService.setRole(this.selectedRole);
  }

  isWelcomePage(): boolean {
    return this.currentUrl === '/welcome';
  }

  isAboutPage(): boolean {
    return this.currentUrl === '/about';
  }

  showSidebar(): boolean {
    const path = this.currentUrl;
    return path === '/home'
        || path === '/anomalies'
        || path === '/dashboards'
        || path === '/dashboards-home'
        || path === '/predict-revenue'
        || path === '/predict-delay'
        || path === '/forecast-errors'
        || path === '/litige';
  }
}
