import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CEOPreset } from './ceo.preset';
import { ConfirmationService, MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: CEOPreset,
        options: {
          darkModeSelector: '.dark-mode',
          ripple: true,
        },
      },
    }),
    ConfirmationService,
    MessageService,
  ],
};
