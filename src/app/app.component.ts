declare var require: any;

import { Component, NgZone } from "@angular/core";

import * as Highcharts from "highcharts";
const HighchartsMore = require("highcharts/highcharts-more.src");
HighchartsMore(Highcharts);
const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
HC_solid_gauge(Highcharts);

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Highcharts = Highcharts;
  type='area';
  chartOptions = {   
    chart: {
       type: 'area'
    },
    title: {
       text: 'High Chart'
    },
    subtitle : {
       style: {
          position: 'absolute',
          right: '0px',
          bottom: '10px'
       }
    },
    legend : {
       layout: 'vertical',
       align: 'left',
       verticalAlign: 'top',
       x: -150,
       y: 100,
       floating: true,
       borderWidth: 1,
       backgroundColor:'#FFFFFF'
    },
    xAxis:{
       categories: ['Short-term bonds/Stable market',
       'Intermediate / Long-term bonds',
       'Aggresive bonds',
       'Large-cap stocks',
       'Small / mid-cap stock',
       'International stocks',
       'Multi-asset / others'] 
    },
    yAxis : {
       title: {
          text: 'Number of units'
       },
       labels: {
          formatter: function () {
             return this.value;
          }
       },
       min:0
    },
    tooltip : {
      
    },
    plotOptions : {
       area: {
          fillOpacity: 0.5 
       },
       pie: {
         shadow: false,
         center: ['50%', '50%'],
         size:'70%',
         innerSize: '40%',
         showInLegend:true             
      }
    },
    credits:{
       enabled: false
    },


    series: [{
         type: 'pie',
         
         data: [
            ['Short-term bonds/Stable market',   38.03],
            ['Intermediate / Long-term bonds',   3.44],
            ['Aggresive bonds',   2.1],
            ['Large-cap stocks',   18.93],
            ['Small / mid-cap stock',   11.05],
            ['International stocks',   1.57],
            ['Multi-asset / others',   28.92]
           
         ]
      }]
 };
  updateFlag=false;
  
  selectedValue=null
  constructor() { }

  ngOnInit() {
   
  }
  ddata = [
   ['June 30,2019',
   'July 31,2019',
   'August 31,2019',
   'September 30,2019',
   'October 31,2019',
   'November 30,2019',
   'December 31,2019']
  
];
  onbtnGroupClick(value)
  {
    this.selectedValue=null
    switch(value)
    {
      case "1":
      {
        this.chartOptions.series[0].data =  [
         ['Short-term bonds/Stable market', 38.03],
         ['Intermediate / Long-term bonds', 3.44],
         ['Aggresive bonds: 2.1', 2.1],
         ['Large-cap stocks', 18.93],
         ['mall / mid-cap stock', 11.05],
         ['International stocks', 1.57],
         ['Multi-asset / others', 28.92]
               
        
      ];
       this.ddata = [
        ['June 30,2019'],
        ['July 31,2019'],
        ['August 31,2019'],
        ['September 30,2019'],
        ['October 31,2019'],
        ['November 30,2019'],
        ['December 31,2019']
       
     ];
     this.chartOptions.xAxis={
      categories: ['Short-term bonds/Stable market',
      'Intermediate / Long-term bonds',
      'Aggresive bonds',
      'Large-cap stocks',
      'Small / mid-cap stock',
      'International stocks',
      'Multi-asset / others'] 
   };
       break;

      }
      case "2":
        {
         this.chartOptions.series[0].data = [
            ['mall / mid-cap stock', 11.05],
         ['International stocks', 1.57],
         ['Multi-asset / others', 28.92]
         ];
         this.ddata = [
          ['October 31,2019'],
          ['November 30,2019'],
          ['December 31,2019']
       ];
       this.chartOptions.xAxis={
         categories: ['Small / mid-cap stock',
         'International stocks',
         'Multi-asset / others']  
      };
         break;

        }
      case "3":
        {
         this.chartOptions.series[0].data = [
            ['Intermediate / Long-term bonds', 3.44],
         ['Aggresive bonds: 2.1', 2.1],
         ['Large-cap stocks', 18.93],
         ['mall / mid-cap stock', 11.05],
         ['International stocks', 1.57],
         ['Multi-asset / others', 28.92]
         ];
          
  
         this.ddata = [
            
          ['August 17,2019'],
          ['July 31,2019'],
          ['August 31,2019'],
          ['September 30,2019'],
          ['October 31,2019'],
          ['November 30,2019'],
          ['December 31,2019']
       ];
       this.chartOptions.xAxis={
         categories: ['July 31,2019',
         'August 31,2019',
         'September 30,2019',
         'October 31,2019',
         'November 30,2019',
         'December 31,2019']
      };
         break;
        }
      default:
        {

        }
    }
    this.updateFlag=true;

  }
}
