import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
    selector: 'form-checkbox',
    template: `
    <div [formGroup]="group">
    <p  *ngFor="let option of group.controls['checkboxgroup'].controls;let idx = index">
      <input [value]="option.value"  [formControl]="option" 
      name="{{option.value}}" type="checkbox" id="{{'checkbox_' + idx}}"   />
      
      <label for="{{'checkbox_' +idx}}">{{option.option}}</label>
      </p>
    </div>`,
})
export class FormCheckboxComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
}
