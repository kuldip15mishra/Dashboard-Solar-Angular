import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'form-input',
  template: `
  <div class="file-field input-field" [formGroup]="group">
    <div class="btn">
    <span>File</span>
    <input type="file">
    </div>
    <div class="file-path-wrapper">
    <input class="file-path validate" type="text">
    </div>
    </div>
  `,
})
export class FormFileInputComponent  implements Field {
    config: FieldConfig;
    group: FormGroup;
}
