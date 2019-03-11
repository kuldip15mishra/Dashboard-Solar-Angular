import { Component,OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';


 
@Component({
  selector: 'driven-chart',
  template: `
    <button style ="display:none;" (click)="add()">Add Point!</button>
    <div [chart]="chart"></div>
  `
})
export class DrivenChartComponent implements OnInit,OnChanges {
  @Input() option:any;
  //@Output() GenerateChart = new EventEmitter();

  chart:Chart
  constructor()
  {
        
  }

  ngOnInit() {
    this.chart = new Chart(this.option);
  }
  
  ngOnChanges(changes: any) {
    console.log(this.option);
    this.chart = new Chart(this.option);
  }

  /*GenerateChartProcess()
  {
    this.GenerateChart.emit();
    this.chart = new Chart(this.option);
  }
  */
  
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}