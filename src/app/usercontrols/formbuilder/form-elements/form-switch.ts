import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'form-input',
  template: `
  <div [formGroup]="group">
  <div class="switch">
    <label>
    Off
    <input type="checkbox">
    <span class="lever"></span>
    On
    </label>
    </div>
    </div>
  `,
})
export class FormSwitchComponent  implements Field {
    config: FieldConfig;
    group: FormGroup;
}
