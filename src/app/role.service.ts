import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private fakeRole: string = 'finance'; // rôle par défaut

  constructor() {}

  getRole(): string {
    return this.fakeRole;
  }

  is(role: string): boolean {
    return this.fakeRole === role;
  }

  setRole(newRole: string): void {
    this.fakeRole = newRole;
  }
}
