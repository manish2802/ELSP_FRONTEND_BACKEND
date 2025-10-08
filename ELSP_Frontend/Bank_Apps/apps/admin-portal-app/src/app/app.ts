import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './features/register/register-page';
import { LandingPageComponent } from './features/landing/landing-page';
import { LoginPageComponent } from './features/login/login-page';

@Component({
  imports: [
    NxWelcome,
    RouterModule,
    FormsModule,
    LoginPageComponent,
    RegisterPageComponent,
    LandingPageComponent
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'admin-portal-app';
}
