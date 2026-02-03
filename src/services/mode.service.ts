import { Injectable } from '@angular/core';
import { AppMode } from '../types/common.types';

@Injectable({
  providedIn: 'root',
})
export class ModeService {
  private readonly STORAGE_KEY = 'mode';

  get current(): AppMode {
    return (localStorage.getItem(this.STORAGE_KEY) as AppMode) || 'dark-mode';
  }

  async change(mode: AppMode) {
    if (mode === this.current) return;

    localStorage.setItem(this.STORAGE_KEY, mode);

    const element = document.querySelector('html');
    element?.classList.toggle('dark-mode');
  }
}
