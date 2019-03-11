import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
@Component({
  selector: 'form-input',
  template: `
  <div class="input-field" [formGroup]="group">
  <textarea id="textarea1" class="materialize-textarea"></textarea>
  <label for="textarea1">Textarea</label>
    </div>
  `,
})
export class FormTextAreaComponent  implements Field {
    config: FieldConfig;
    group: FormGroup;
}
