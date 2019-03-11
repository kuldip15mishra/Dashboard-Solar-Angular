import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldConfig } from './models/field-config.interface';
import { FormBuilderService } from './provider/api.service';
import { Observable, Subject } from 'rxjs/Rx';
import { FormArray, FormControl } from '@angular/forms/src/model';
@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: ['dynamic-form.component.scss'],
  template: `
  <form
  class="row"
  [formGroup]="form"
  (submit)="handleSubmit($event)">
  <ng-container
    *ngFor="let field of config;"
    dynamicField
    [config]="field"
    [group]="form">
  </ng-container>
</form>
  `
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: FieldConfig[] = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  formArray: FormArray;

  get controls() { return this.config.filter(({ type }) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }


  constructor(private fb: FormBuilder, private builderService: FormBuilderService) { }

  ngOnInit() {
    this.form = this.createGroup();
   console.log(this.form);
  }
  ngOnChanges() {
    if (this.form) {
      alert(1);
      const controls = Object.keys(this.form.controls);
      console.log(controls);
      const configControls = this.controls.map((item) => item.name);
      console.log(configControls);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });

    }
  }
  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => {
      if(control.type == "checkbox")
      {
        group.addControl(control.name, this.fb.array(control.options));
      }
      else
      {
        group.addControl(control.name, this.createControl(control))
      }
    }
    );
    return group;
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.getActionMethod(this.value);
  }

  getActionMethod(obj: any) {
    let callMethod = this.config.filter(item => item.type === 'button');
    let result;
    if (callMethod && callMethod.length > 0) {
      callMethod[0].action.data = obj;
      this.builderService.postData(callMethod[0].action).subscribe(res => {
        if(res){
        this.submit.emit(res);
        }else{
          this.submit.emit({status:'fail'});
        }
      });
    }
    
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }

}