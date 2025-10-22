import { Route } from '@angular/router';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './features/pagenotfound/page-not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
   // canActivate: [authGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    // This route seems unused as enrollment is handled inside the dashboard module.
    // It can likely be removed unless you have a separate enrollment flow.
    path: 'enrollment-partner',
    //canActivate: [authGuard],
    loadChildren: () =>
      import('./features/enrollment-partner/enrollment-partner.module').then(
        (m) => m.EnrollmentPartnerModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', component: PageNotFoundComponent },
];
