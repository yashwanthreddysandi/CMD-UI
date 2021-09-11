import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Appointments } from '../shared/Appointment';
Chart.register(...registerables);

@Component({
  selector: 'app-top-dashboard',
  templateUrl: './top-dashboard.component.html',
  styleUrls: ['./top-dashboard.component.css']
})
export class TopDashboardComponent implements OnInit {

  high!:number;
  @Input("Appointments") Appointments!:Appointments[];
  constructor() {}

  ngOnInit(): void {
    const DISPLAY = false;
    const BORDER = false;
    const CHART_AREA = false;
    const TICKS = false;
    var bars_data =[12, 15, 10, 15, 20, 22, 14]
    let i =bars_data.indexOf(Math.max(...bars_data));
    this.high = bars_data[i];
    var bars_data1 =[12, 15, 10, 15, 10, 9, 14]
    let i1 =bars_data1.indexOf(Math.max(...bars_data1));
    this.high = bars_data1[i1];
    var bars_data2 =[3, 6, 6, 9, 5, 8, 9]
    let i2 =bars_data2.indexOf(Math.max(...bars_data2));
    // this.high = bars_data[i];
    // this.high1 = bars_data1[i1];
    // this.high2 = bars_data2[i2];
    var bars_colors =[
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
            ]
  var bars_colors1 =[
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
            ]
  var bars_colors2 =[
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
              'rgba(0,0,0,0.2)',
            ]
    bars_colors[i] = "rgb(46, 125, 143)";
    bars_colors1[i1] = "rgb(46, 125, 143)";
    bars_colors2[i2] = "rgb(46, 125, 143)";
    
    var myChart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            borderRadius: 100,
            borderSkipped: false,
            label: '',
            data: bars_data,
            backgroundColor:bars_colors ,
            borderColor: [
              'rgba(255, 99, 132, 0)',
              'rgba(54, 162, 235, 0)',
              'rgba(255, 206, 86, 0)',
              'rgba(75, 192, 192,0 )',
              'rgba(153, 102, 255,0)',
              'rgba(255, 159, 64, 0)',
              'rgba(255, 159, 64, 0)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 25,
            display: DISPLAY,
            grid: {
              display: DISPLAY,
              drawBorder: BORDER,
              drawOnChartArea: CHART_AREA,
              drawTicks: TICKS,
            },
            beginAtZero: false,
          },
          x: {
            display: DISPLAY,
            grid: {
              display: DISPLAY,
              drawBorder: BORDER,
              drawOnChartArea: CHART_AREA,
              drawTicks: TICKS,
            },
          },
        },
      },
    });
    var myChart1 = new Chart('MyChart1', {
      type: 'bar',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            borderRadius: 100,
            borderSkipped: false,
            label: '',
            data: bars_data1,
            backgroundColor:bars_colors1 ,
            borderColor: [
              'rgba(255, 99, 132, 0)',
              'rgba(54, 162, 235, 0)',
              'rgba(255, 206, 86, 0)',
              'rgba(75, 192, 192,0 )',
              'rgba(153, 102, 255,0)',
              'rgba(255, 159, 64, 0)',
              'rgba(255, 159, 64, 0)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 25,
            display: DISPLAY,
            grid: {
              display: DISPLAY,
              drawBorder: BORDER,
              drawOnChartArea: CHART_AREA,
              drawTicks: TICKS,
            },
            beginAtZero: false,
          },
          x: {
            display: DISPLAY,
            grid: {
              display: DISPLAY,
              drawBorder: BORDER,
              drawOnChartArea: CHART_AREA,
              drawTicks: TICKS,
            },
          },
        },
      },
    });
    var myChart2 = new Chart('MyChart2', {
      type: 'bar',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            borderRadius: 100,
            borderSkipped: false,
            label: '',
            data: bars_data2,
            backgroundColor:bars_colors2 ,
            borderColor: [
              'rgba(255, 99, 132, 0)',
              'rgba(54, 162, 235, 0)',
              'rgba(255, 206, 86, 0)',
              'rgba(75, 192, 192,0 )',
              'rgba(153, 102, 255,0)',
              'rgba(255, 159, 64, 0)',
              'rgba(255, 159, 64, 0)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: 0,
            max: 25,
            display: DISPLAY,
            grid: {
              display: DISPLAY,
              drawBorder: BORDER,
              drawOnChartArea: CHART_AREA,
              drawTicks: TICKS,
            },
            beginAtZero: false,
          },
          x: {
            display: DISPLAY,
            grid: {
              display: DISPLAY,
              drawBorder: BORDER,
              drawOnChartArea: CHART_AREA,
              drawTicks: TICKS,
            },
          },
        },
      },
    });
    console.log(bars_data)
  }
high1Fn(){
  return this.Appointments.filter(a=>a.Status=='accepted').length;
}
high2Fn(){
  return this.Appointments.filter(a=>a.Status=='rejected').length;
}
}
