import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldRadioGroupComponent } from './form-field-radio-group.component';

describe('FormFieldRadioGroupComponent', () => {
  let component: FormFieldRadioGroupComponent;
  let fixture: ComponentFixture<FormFieldRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldRadioGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
