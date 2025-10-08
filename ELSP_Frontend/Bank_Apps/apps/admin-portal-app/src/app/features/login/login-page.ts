import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
  standalone: true,
  imports: [FormsModule],
})
export class LoginPageComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginError = false;
      this.router.navigate(['/home']); // <-- Redirect to home
    } else {
      this.loginError = true;
    }
  }
}
