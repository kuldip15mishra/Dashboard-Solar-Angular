import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldDirective } from './directive/dynamic-field';
import { FormInputComponent } from './form-elements/form-input';
import { FormSelectComponent } from './form-elements/form-select';
import { FormButtonComponent } from './form-elements/form-button';
import { FormCheckboxComponent } from './form-elements/form-checkbox';
import { FormRadioComponent } from './form-elements/form-radio';
import { FormDatePickerComponent } from './form-elements/form-datepicker';
import { FormTimePickerComponent } from './form-elements/form-timepicker';
import { FormSwitchComponent } from './form-elements/form-switch';
import { FormRangeComponent } from './form-elements/form-range';
import { FormFileInputComponent } from './form-elements/form-file-input';
import {FormBuilderService} from './provider/api.service';
@NgModule({
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  declarations: [DynamicFormComponent,
    DynamicFieldDirective,
    FormRadioComponent,
    FormSelectComponent,
    FormDatePickerComponent,
    FormInputComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormTimePickerComponent,
    FormSwitchComponent,
    FormRangeComponent,
    FormFileInputComponent],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    FormRadioComponent,
    FormDatePickerComponent,
    FormTimePickerComponent,
    FormSwitchComponent,
    FormRangeComponent,
    FormFileInputComponent
  ],
  providers:[
    FormBuilderService
  ]
})
export class DynamicFormModule { }
