/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { loadLocaleFiles } from './app/local-loader';

export const locales = [
  { key: 'ar', label: 'العربية', dir: 'rtl' },
  { key: 'en', label: 'English', dir: 'ltr' },
];

export const modes = ['light-mode', 'dark-mode'];

async function bootstrap() {
  const locale = localStorage.getItem('locale') || 'ar';
  const mode = localStorage.getItem('mode') || 'dark-mode';
  const element = document.querySelector('html');
  element?.classList.add(mode);
  element?.setAttribute('dir', locales.find((l) => l.key === locale)?.dir || 'rtl');
  element?.setAttribute('lang', locale);

  try {
    await loadLocaleFiles(locale);
  } catch {
    await loadLocaleFiles('ar');
  }

  bootstrapApplication(App, appConfig).catch(console.error);
}

bootstrap();
