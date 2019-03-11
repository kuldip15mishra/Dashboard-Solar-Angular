import { Component, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

declare var $: any;
@Component({
    selector: 'form-datepicker',
    template: `
    <div  [formGroup]="group"><input [formControlName]="config.name" type="text" class="datepicker"></div>
`,
})
export class FormDatePickerComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
    date: any;
    constructor() {
        this.date = '2016-04-29';
    }
    ngOnChanges(changes: SimpleChanges) {

        if (changes) {
            console.log("date" + this.date);
        }
    }
    public ngOnInit() {
        this.initJQueryComponents();
    }
    protected initJQueryComponents() {
        let self= this;
        $(document).ready(() => {
            let datePicker = $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15 // Creates a dropdown of 15 years to control year
            })
                .on('change', () => {
                    self.date = $('.datepicker').val();
                   // this.config.name=self.date;
                    this.group.controls[this.config.name].setValue(self.date, { emitEvent: true });
                    console.log('triggered change');
                });

            datePicker.pickadate('picker').set('select', this.date, { format: 'yyyy-mm-dd' });
        });
    }

}
