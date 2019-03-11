import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'form-timepicker',
  template: `
  <div  [formGroup]="group">
    <input type="text" class="timepicker">
  </div>
  `,
})
export class FormTimePickerComponent  implements Field {
    config: FieldConfig;
    group: FormGroup;
}
