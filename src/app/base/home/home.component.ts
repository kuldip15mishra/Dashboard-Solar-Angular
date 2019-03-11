
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { FieldConfig } from '../../usercontrols/formbuilder/models/field-config.interface';
import { DynamicFormComponent } from '../../usercontrols/formbuilder/dynamic-form.component';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})

export class HomepageComponent {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  option1:any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  };
   
   



  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Title',
      name: 'title',
      placeholder: 'Enter title',
      widthclass: 's4',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Chart Type',
      name: 'dropdown',
      options:['line','area','bar','pie','scatter']
      // [{
      //   option:'option1',
      //   value:1
      // },
      // {
      //   option:'option2',
      //   value:3
      // },
      // {
      //   option:'option3',
      //   value:3
      // }],
      ,
      widthclass: 's4',
      placeholder: 'Select dropdown',
      validation: [Validators.required]
    },
    {
      type: 'radio',
      label: 'Date',
      name: 'radiogroup',
      options:['a','b','c']
      // [{
      //   option:'option1',
      //   value:1
      // },
      // {
      //   option:'option2',
      //   value:3
      // },
      // {
      //   option:'option3',
      //   value:3
      // }],
      ,
      widthclass: 's4',
      placeholder: 'Select dropdown',
      validation: [Validators.required]
    },
    {
      type: 'checkbox',
      label: 'Check mark the stats',
      name: 'checkboxgroup',
      options:
      [{
       
        option:'option1',
        value:1,
        checked:true
      },
      {
       
        option:'option2',
        value:3,
        checked:true
      },
      {
        
        option:'option3',
        value:3,
        checked:true
      }],
      widthclass: 's4',
      placeholder: 'Select checkbox',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      action: { uri: 'posts', type: 'post' }
    }
  ];
  constructor(private _http: Http) { 
    
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Todd Motto');
    // this.form.setValue('test', 'Tssdgsdgso');
  }
  submit(value: { [name: string]: any }) {
    alert(JSON.stringify(value));
  }
}
