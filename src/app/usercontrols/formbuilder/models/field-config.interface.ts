import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  defaultvalue?:string
  datatype?:string;
  options?: any[],
  placeholder?: string,
  type: string,
  validation?: ValidatorFn[],
  value?: any,
  widthclass?: string;
  action?:Action;
  active ?:boolean;

}

export interface Action {
uri:string;
type:string;
params?:string[];
data?:any;
}