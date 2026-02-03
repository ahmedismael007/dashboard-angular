import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';
import { AppLocale } from '../../types/common.types';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { locales } from '../../main';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-locale-switcher',
  imports: [ButtonModule, MenuModule],
  templateUrl: './locale-switcher.html',
  styleUrl: './locale-switcher.css',
})
export class LocaleSwitcher implements OnInit {
  locales = locales;
  currentLocale!: string;
  localesMenu: MenuItem[] | undefined;

  constructor(private localService: LocalService) {
    this.currentLocale = this.localService.current;
  }

  ngOnInit(): void {
    this.localesMenu = this.locales.map((l) => ({
      label: l.label,
      command: () => this.set(l.key as AppLocale),
    }));
  }

  set(locale: AppLocale) {
    this.localService.change(locale);
  }

  get currentLocaleLabel() {
    return this.locales.find((l) => l.key === this.currentLocale)?.label;
  }
}
