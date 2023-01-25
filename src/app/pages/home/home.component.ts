
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { LoginStatusService } from 'src/app/services/login-status.service';
import { PedidosService } from 'src/app/services/pedidos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  anos = [
    {ano:2019, numeroPedidos:0},
    {ano:2020, numeroPedidos:0},
    {ano:2021, numeroPedidos:0},
    {ano:2022, numeroPedidos:0},
    {ano:2023, numeroPedidos:0}
  ]
  constructor(
    private http: HttpClient,
    private router: Router,
    private loginStatusService: LoginStatusService,
    private pedidosService: PedidosService
  ) {

    Chart.register(...registerables);
  }



  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef | undefined;
  @ViewChild("meuCanvas2", { static: true }) elementos: ElementRef | undefined;


   ngOnInit() {
    if (this.loginStatusService.redirectNãoLogado()) return
    this.anos[0].numeroPedidos = 150
    this.montaGrafico();
  }
  

  public async montaGrafico() {
   new Chart(this.elemento?.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",],
        datasets: [
          {
            data: [65, 43, 65, 43, 65, 43, 65, 43, 65, 43, 65, 43],
            backgroundColor: 'rgb(80, 42, 110)',
            label: '2022',
          }
        ]
      },
    });
    
    new Chart(this.elementos?.nativeElement, {
      type: 'pie',
      data: {
        labels: [2,2,2,2,2],
        datasets: [
          {
            data: [ 1,1,1,1,1],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)', 'rgb(80, 42, 110)', 'rgb(10, 42, 110)'],

          }
        ]
      }
    });
  }
 
}







