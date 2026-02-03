import { Injectable } from '@angular/core';
import { AppLocale } from '../types/common.types';
import { loadLocaleFiles } from '../app/local-loader';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private readonly STORAGE_KEY = 'locale';

  get current(): AppLocale {
    return (localStorage.getItem(this.STORAGE_KEY) as AppLocale) || 'ar';
  }

  async change(locale: AppLocale) {
    if (locale === this.current) return;

    localStorage.setItem(this.STORAGE_KEY, locale);

    await loadLocaleFiles(locale);

    window.location.reload();
  }
}
