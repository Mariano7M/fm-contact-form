import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormFieldComponent } from './components/form-field/form-field.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFieldRadioComponent } from './components/form-field-radio/form-field-radio.component';
import { FormFieldRadioGroupComponent } from './components/form-field-radio-group/form-field-radio-group.component';
import { FormFieldCheckboxComponent } from './components/form-field-checkbox/form-field-checkbox.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterOutlet,
    FormFieldComponent,
    ReactiveFormsModule,
    FormFieldRadioComponent,
    FormFieldRadioComponent,
    FormFieldRadioGroupComponent,
    FormFieldCheckboxComponent,
    SuccessAlertComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  contactForm!: FormGroup;
  isSuccessAlertVisible = false;
  ALERT_TIMEOUT = 5000;

  constructor() {
    this.initializeContactForm();
  }

  private initializeContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      queryType: ['', [Validators.required]],
      message: ['', [Validators.required]],
      termsAndConditions: [null, [Validators.requiredTrue]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.contactForm.reset();
    this.showSuccessAlert();
  }

  private showSuccessAlert() {
    this.isSuccessAlertVisible = true;
    setTimeout(() => {
      this.isSuccessAlertVisible = false;
    }, this.ALERT_TIMEOUT);
  }
}
