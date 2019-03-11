import { GlobalSetting } from "../base/globalSettings";
import { Title } from "@angular/platform-browser";



export class ChartUIBase extends GlobalSetting {

    chart: Chart = {};
    title: title = {};
    xAxis: xAxis = {};
    yAxis: yAxis = {};
    credits: boolean = false;
    legend: any = {
        enabled: false
    }
    series: any[] = [];

  

}

export interface Chart {
    type?: string;
    plotBackgroundImage?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    height?: number;
    width?: number;
    style?: style;

}


export interface title {
    text?: string;
    align?: string;
    style?: style;
}

export interface style {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
}

export interface xAxis {
    categories?: any;
    type?: string;
    title?: title;
}

export interface yAxis {
    lineColor?: string;
    lineWidth?: string;
    type?: string;
    title?: title;
    min?: number;
    max?: number;
    labels?: any;

}

export interface series {
    pointWidth?: number;
}

export interface plotOptions {
    coloumn?: coloumnStacking;
    series?: series;
}

export interface coloumnStacking {
    stacking?: string;
}
