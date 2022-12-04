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
              backgroundColor:'#FFCC00',
            },{
              data:[65,54,43,32],
              backgroundColor:'#00AEFF' ,
            }
          ]
        },
     });
     new Chart(this.elementos?.nativeElement, {
      type: 'bar',
      data: {
        labels: ["janeiro","fevereiro","marco","abril"],
        datasets: [
          {
            data:[65,43,65,43],
            backgroundColor:'#FFCC00',
          },{
            data:[65,54,43,32],
            backgroundColor:'#00AEFF' ,
          }
        ]
      },
   });
    } 
    
  }
    
  




