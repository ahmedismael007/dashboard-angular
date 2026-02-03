import { Routes } from '@angular/router';

export const routes: Routes = [
  // Authentication
  {
    path: 'login',
    title: $localize`:@@login:Login`,
    loadComponent: () => import('./authentication/login/login').then((m) => m.Login),
  },
  {
    path: 'getting-started',
    children: [
      {
        path: 'personal-info',
        loadComponent: () =>
          import('./authentication/getting-started/personal-info/personal-info').then(
            (m) => m.PersonalInfo,
          ),
      },
      {
        path: 'email-verification',
        loadComponent: () =>
          import('./authentication/getting-started/email-verification/email-verification').then(
            (m) => m.EmailVerification,
          ),
      },
      {
        path: 'organization-info',
        loadComponent: () =>
          import('./authentication/getting-started/organization-info/organization-info').then(
            (m) => m.OrganizationInfo,
          ),
      },
      {
        path: 'payment',
        loadComponent: () =>
          import('./authentication/getting-started/payment/payment').then((m) => m.Payment),
      },
      {
        path: 'welcome',
        loadComponent: () =>
          import('./authentication/getting-started/welcome/welcome').then((m) => m.Welcome),
      },
    ],
  },
];
