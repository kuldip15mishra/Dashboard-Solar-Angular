import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
    selector: 'form-button',
    template: `
  <div  [formGroup]="group">
  <button
    [disabled]="config.disabled" type="submit" class="waves-effect waves-light btn" value="config.action.method">
    {{ config.label }}
  </button>
</div>
  `,
})
export class FormButtonComponent implements Field {
    config: FieldConfig;
    group: FormGroup;

    
}
