import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationForm } from './email-verification-form';

describe('EmailVerificationForm', () => {
  let component: EmailVerificationForm;
  let fixture: ComponentFixture<EmailVerificationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
