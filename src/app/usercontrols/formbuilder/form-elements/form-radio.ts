import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'form-radio',
  template: `
  <div [formGroup]="group">
  <p  *ngFor="let option of config.options;let idx = index">
    <input [value]="option"  [formControlName]="config.name" name="{{config.value}}" type="radio" id="{{idx+5}}"   />
    <label for="{{idx+5}}">{{option}}</label>
    </p>
 
  </div>
  `,
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  onSelectionChange(entry, name) {
    alert(JSON.stringify(entry));
    name = entry.target.value;
  }
}
