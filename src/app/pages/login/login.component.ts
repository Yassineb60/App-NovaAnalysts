import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  goToWelcome() {
    this.router.navigate(['/welcome']);
  }

  onLogin() {
    const success = this.auth.login(this.username.trim(), this.password);

    if (success) {
      this.errorMessage = '';
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect.";
    }
  }
}
