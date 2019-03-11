import { Component,OnInit,Input } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'
import * as _ from 'lodash';

@Component({
    templateUrl: 'driven-chart-configuration.html'
  })
export class DrivenChartConfigComponent implements OnInit {
    Categories:any[] = ['Fruits','Vegitables']
    Fruits:any[] = ["Apple","Mangoes"];
    Vegitables:any[] = ["Tamotoes","Onion"];

    
    chartCongigForm:FormGroup;  
    chartType:string="";  
    chartTitle:string="";

    constructor(private frmbuilder:FormBuilder)  
    {
         _.find(this.Categories, (h) => h == "");
         let ass = this.Categories.filter(function(e){
             return e.indexof('') > -1
         }).length

        this.chartCongigForm=frmbuilder.group({  
             chartType:new FormControl(),
             chartTitle:new FormControl(),
             chartCaterioes:this.frmbuilder.array(this.Categories),
            });  
    }

    option1:any = {
        chart: {    
          type: 'bar'
        },
        title: {
          text: 'Linechart'
        },
        xAxis: {
            categories: this.Fruits,
            crosshair: true,
            title: {
                text: 'Month'
            }
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'April',
          data: [100, 200]
        }]
      };
    ngOnInit() {
       
      }

      PostData(chartCongigForm:NgForm)
      {
        this.option1.chart.type = chartCongigForm.controls.chartType.value;
        this.option1.title.text = chartCongigForm.controls.chartTitle.value;
        this.option1.xAxis.categories = this.Vegitables;
        this.option1.series[0].data = [500,900];
        this.option1 = Object.assign({},this.option1);
      
      }
}