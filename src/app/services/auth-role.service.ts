import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthRoleService {
  private currentRole: string | null = null;

  constructor() {}

  login(role: string): void {
    this.currentRole = role;
    localStorage.setItem('userRole', role);
  }

  logout(): void {
    this.currentRole = null;
    localStorage.removeItem('userRole');
  }

  getRole(): string | null {
    return this.currentRole || localStorage.getItem('userRole');
  }

  isRole(role: string): boolean {
    return this.getRole() === role;
  }
}
