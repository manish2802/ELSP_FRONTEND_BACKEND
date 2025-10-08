import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { LoyaltyDashboardComponent } from './features/loyalty-dashboard/loyalty-dashboard-component';

@Component({
  imports: [LoyaltyDashboardComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'reward-point-app';
}
