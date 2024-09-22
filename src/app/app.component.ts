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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  contactForm!: FormGroup;

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
    console.log(this.contactForm.value);
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
  }
}
