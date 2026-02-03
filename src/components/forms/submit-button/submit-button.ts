import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FormActionService } from '../../../services/form-action.service';
import { FormMode } from '../../../types/common.types';

@Component({
  selector: 'app-submit-button',
  imports: [ButtonModule],
  templateUrl: './submit-button.html',
  styleUrl: './submit-button.css',
})
export class SubmitButtonComponent implements OnInit {
  @Input({ required: true }) route!: string;
  @Input({ required: true }) mode!: FormMode;
  @Input() id?: number | string;
  @Input() fluid = false;
  @Input() label = 'Submit';
  @Input() icon = 'pi pi-check';

  form!: FormGroup;

  constructor(
    private controlContainer: ControlContainer,
    public formAction: FormActionService,
  ) {}

  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
  }

  submit() {
    if (!this.form || this.form.invalid) return;

    this.formAction.execute(this.mode, this.route, this.form.value, this.id, () => {
      this.form.reset();
    });
  }
}
