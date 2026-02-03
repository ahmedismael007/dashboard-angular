import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [NgOptimizedImage],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {}
