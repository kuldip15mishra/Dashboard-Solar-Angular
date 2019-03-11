import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'form-input',
  template: `
  <div [formGroup]="group">
  <p class="range-field">
    <input type="range" id="tests5" min="0" max="100" />

    </p>
  </div>
  `,
})
export class FormRangeComponent  implements Field {
    config: FieldConfig;
    group: FormGroup;
}
