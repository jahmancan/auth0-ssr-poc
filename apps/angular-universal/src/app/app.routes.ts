import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent)
  },
  {
    path: '',
    loadComponent: () => import('./pages/nx-welcome/nx-welcome.component').then(c => c.NxWelcomeComponent),
    pathMatch: 'full',
  }
];
