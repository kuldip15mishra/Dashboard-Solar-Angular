import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
declare var $: any;
@Component({
  selector: 'form-select',
  template: `
  <div 
  class="dynamic-field form-select"
  [formGroup]="group">
  <label>{{ config.label }}</label>
  <select [formControlName]="config.name" class="browser-default">
    <option value="">{{ config.placeholder }}</option>
    <option *ngFor="let option of config.options">
      {{ option }}
    </option>
  </select>
</div>
  `,
})
export class FormSelectComponent  implements Field {
    config: FieldConfig;
    group: FormGroup;

    public ngOnInit() {
      
  }
 
}
