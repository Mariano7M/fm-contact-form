import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldRadioComponent } from './form-field-radio.component';

describe('FormFieldRadioComponent', () => {
  let component: FormFieldRadioComponent;
  let fixture: ComponentFixture<FormFieldRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldRadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
