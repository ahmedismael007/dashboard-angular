import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-field',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    MessageModule,
    IconFieldModule,
    InputIconModule,
    CommonModule,
  ],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css',
})
export class TextField {
  @Input({ required: true }) control!: AbstractControl;
  @Input() label = '';
  @Input() inputType: 'input' | 'textarea' = 'input';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() rows = 3;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() icon = 'pi pi-pencil';

  getFormControl(): FormControl {
    return this.control as FormControl;
  }

  x = 10;

  sum(number1: number, number2: number) {
    console.log(this.x);
  }
}
