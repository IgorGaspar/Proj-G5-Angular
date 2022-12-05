import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(
    private http:HttpClient,
    private router:Router,
  ) { 
    Chart.register(...registerables);
  }
  
  @ViewChild("meuCanvas", {static: true}) elemento: ElementRef | undefined;
  @ViewChild("meuCanvas2", {static: true}) elementos: ElementRef | undefined;
  ngOnInit() {
    
      new Chart(this.elemento?.nativeElement, {
        type: 'bar',
        data: {
          labels: ["janeiro","fevereiro","marco","abril"],
          datasets: [
            {
              data:[65,43,65,43],
              backgroundColor:'rgb(80, 42, 110)',
            }
          ]
        },
     });
     new Chart(this.elementos?.nativeElement, {
      type: 'pie',
      data: {
        labels: ["2017","2018","2019","2020","2021"],
        datasets: [
          {
            data:[400,43,65,43,100],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)','rgb(80, 42, 110)','rgb(10, 42, 110)'],
          }
        ]
      },
   });
    } 
    
  }
    
  




