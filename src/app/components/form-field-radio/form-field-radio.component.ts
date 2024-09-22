import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field-radio',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldRadioComponent),
      multi: true,
    },
  ],
  templateUrl: './form-field-radio.component.html',
  styleUrl: './form-field-radio.component.scss',
})
export class FormFieldRadioComponent
  implements ControlValueAccessor, AfterViewInit
{
  @Input({ required: true })
  inputId!: string;
  @Input({ required: true })
  value!: string;
  @Input({ required: true })
  name!: string;

  @ViewChild('radio') radio!: ElementRef<HTMLInputElement>;

  private _value: string = '';

  ngAfterViewInit() {
    this.updateChecked();
  }

  onChange!: (value: string) => void;
  onTouched!: () => void;

  onInputChange() {
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this._value = value;
    this.updateChecked();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateChecked() {
    const isRadioChecked = this._value === this.value;
    if (this.radio) {
      this.radio.nativeElement.checked = isRadioChecked;
    }
  }
}
