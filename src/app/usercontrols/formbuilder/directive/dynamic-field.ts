import { ComponentFactoryResolver, ComponentRef, OnChanges, Directive, Type, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as formelements from '../form-elements/index';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
const components: { [type: string]: Type<Field> } = {
    button: formelements.FormButtonComponent,
    input: formelements.FormInputComponent,
    select: formelements.FormSelectComponent,
    checkbox: formelements.FormCheckboxComponent,
    radio: formelements.FormRadioComponent,
    datepicker:formelements.FormDatePickerComponent,
    timepicker:formelements.FormTimePickerComponent,
    switch:formelements.FormSwitchComponent,
    fileinput:formelements.FormInputComponent,
    range:formelements.FormRangeComponent,
    
};

@Directive({
    selector: '[dynamicField]',
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
    @Input()
    config: FieldConfig;

    @Input()
    group: FormGroup;

    component: ComponentRef<Field>;


    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    ngOnInit() {
        if (!components[this.config.type]) {
            const supportedTypes = Object.keys(components).join(', ');
            throw new Error(
                `Trying to use an unsupported type (${this.config.type}).
              Supported types: ${supportedTypes}`
            );
        }
        const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
    ngOnChanges() {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;

            console.log("group val: "+  JSON.stringify(this.group));
        }
    }
}