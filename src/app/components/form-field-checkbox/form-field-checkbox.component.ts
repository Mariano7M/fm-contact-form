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
  selector: 'app-form-field-checkbox',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldCheckboxComponent),
      multi: true,
    },
  ],
  templateUrl: './form-field-checkbox.component.html',
  styleUrl: './form-field-checkbox.component.scss',
})
export class FormFieldCheckboxComponent
  implements ControlValueAccessor, AfterViewInit
{
  @Input({ required: true })
  inputId!: string;
  @Input({ required: true })
  name!: string;
  @Input({ required: false })
  value: boolean = false;

  @ViewChild('checkbox') checkbox!: ElementRef<HTMLInputElement>;

  private _value: boolean = false;

  ngAfterViewInit() {
    this._value = this.value;
  }

  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  onInputChange() {
    this._value = !this._value;
    this.onChange(this._value);
  }
  writeValue(value: boolean): void {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
