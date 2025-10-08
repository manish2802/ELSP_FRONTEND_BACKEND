import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class RegisterPageComponent {
  username = '';
  password = '';
  confirmPassword = '';
  registrationSuccess = false;
  registrationError = '';

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.registrationError = 'Passwords do not match';
      this.registrationSuccess = false;
      return;
    }
    // Simulate registration logic
    this.registrationSuccess = true;
    this.registrationError = '';
    // Add API call here if needed
  }
}