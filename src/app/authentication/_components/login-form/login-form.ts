import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextField } from '../../../../components/forms/text-field/text-field';
import { SubmitButtonComponent } from '../../../../components/forms/submit-button/submit-button';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, TextField, SubmitButtonComponent],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
