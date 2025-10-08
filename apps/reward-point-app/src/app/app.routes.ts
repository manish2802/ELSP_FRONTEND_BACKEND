import { Route } from '@angular/router';
import { LoyaltyDashboardComponent } from './features/loyalty-dashboard/loyalty-dashboard-component';
import { LoginComponent } from './features/login/login';
import { authGuard } from './auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: LoyaltyDashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
];
