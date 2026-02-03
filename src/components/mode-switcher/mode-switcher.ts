import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { ModeService } from '../../services/mode.service';
import { AppMode } from '../../types/common.types';

@Component({
  selector: 'app-mode-switcher',
  imports: [Button],
  templateUrl: './mode-switcher.html',
  styleUrl: './mode-switcher.css',
})
export class ModeSwitcher {
  constructor(private modeService: ModeService) {
    this.currentMode = modeService.current;
  }

  currentMode!: AppMode;

  toggleMode() {
    this.currentMode = this.modeService.current === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.modeService.change(this.currentMode);
  }
}
