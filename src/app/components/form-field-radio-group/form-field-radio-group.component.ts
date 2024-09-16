import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field-radio-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-field-radio-group.component.html',
  styleUrl: './form-field-radio-group.component.scss',
})
export class FormFieldRadioGroupComponent {}
