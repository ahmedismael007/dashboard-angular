import { Component } from '@angular/core';
import { LoginForm } from '../_components/login-form/login-form';
import { NgOptimizedImage } from '@angular/common';
import { Logo } from '../../../components/logo/logo';
import { LocaleSwitcher } from '../../../components/locale-switcher/locale-switcher';
import { ModeSwitcher } from '../../../components/mode-switcher/mode-switcher';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LoginForm, NgOptimizedImage, Logo, LocaleSwitcher, ModeSwitcher, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
