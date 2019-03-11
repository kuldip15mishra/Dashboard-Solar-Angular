import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'form-input',
  template: `
  <div
  class="input-field col "
  [ngClass]="config.widthclass"
  [formGroup]="group">
  <input
  class="validate"
    type="text"
    [formControlName]="config.name">
      <label>{{ config.label }}</label>
</div>
  `,
})
export class FormInputComponent  implements Field {
    config: FieldConfig;
    group: FormGroup;
}
