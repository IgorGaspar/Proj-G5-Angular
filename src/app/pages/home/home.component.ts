
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

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginStatusService: LoginStatusService,
    private pedidosService: PedidosService
    ) {
      
      Chart.register(...registerables);
    }
    
    public anos = [
      {ano:2019, numeroPedidos:0},
      {ano:2020, numeroPedidos:0},
      {ano:2021, numeroPedidos:0},
      {ano:2022, numeroPedidos:0},
      {ano:2023, numeroPedidos:0}
    ]
    public mes = [{mes: "Jan",numeroPedidos:0}, 
                  {mes: "Fev",numeroPedidos:0}, 
                  {mes: "Mar",numeroPedidos:0}, 
                  {mes: "Abr",numeroPedidos:0}, 
                  {mes: "Mai",numeroPedidos:0}, 
                  {mes: "Jun",numeroPedidos:0}, 
                  {mes: "Jul",numeroPedidos:0}, 
                  {mes: "Ago",numeroPedidos:0}, 
                  {mes: "Set",numeroPedidos:0}, 
                  {mes: "Out",numeroPedidos:0}, 
                  {mes: "Nov",numeroPedidos:0}, 
                  {mes: "Dez",numeroPedidos:0}
              ]
    


  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef | undefined;
  @ViewChild("meuCanvas2", { static: true }) elementos: ElementRef | undefined;


   async ngOnInit() {
    if (this.loginStatusService.redirectNãoLogado()) return
    await this.PopulaNumeroPedidoPorAno();
    await this.PopulaNumeroPedidoPorMes();
    this.montaGrafico();
  }
  
  public async PopulaNumeroPedidoPorAno(){
    for(let i=0; i<this.anos.length; i++)
    {
      let dados = await this.pedidosService.buscarPedidoPorAno(this.anos[i].ano);
      this.anos[i].numeroPedidos = dados.length;
    }
  }
  public async PopulaNumeroPedidoPorMes(){
    let dados = await this.pedidosService.buscarPedidoPorAno(this.anos[4].ano)
    for(let i=0; i<12; i++){
      let result = dados.filter(mes => new Date(mes.data).getMonth() == i);
      this.mes[i].numeroPedidos = result.length;
    }
  }

  public async montaGrafico() {
   new Chart(this.elemento?.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          this.mes[0].mes, 
          this.mes[1].mes, 
          this.mes[2].mes, 
          this.mes[3].mes, 
          this.mes[4].mes,
          this.mes[5].mes, 
          this.mes[6].mes,
          this.mes[7].mes, 
          this.mes[8].mes,
          this.mes[9].mes, 
          this.mes[10].mes, 
          this.mes[11].mes],
        datasets: [
          {
            data: [this.mes[0].numeroPedidos, 
                    this.mes[1].numeroPedidos,
                    this.mes[2].numeroPedidos, 
                    this.mes[3].numeroPedidos, 
                    this.mes[4].numeroPedidos, 
                    this.mes[5].numeroPedidos, 
                    this.mes[6].numeroPedidos, 
                    this.mes[7].numeroPedidos, 
                    this.mes[8].numeroPedidos, 
                    this.mes[9].numeroPedidos, 
                    this.mes[10].numeroPedidos, 
                    this.mes[11].numeroPedidos],
            backgroundColor: 'rgb(80, 42, 110)',
            label: '2023',
          }
        ]
      },
    });
    
    new Chart(this.elementos?.nativeElement, {
      type: 'pie',
      data: {
        labels: [this.anos[0].ano,this.anos[1].ano,this.anos[2].ano,this.anos[3].ano,this.anos[4].ano],
        datasets: [
          {
            data: [this.anos[0].numeroPedidos,this.anos[1].numeroPedidos,this.anos[2].numeroPedidos,this.anos[3].numeroPedidos,this.anos[4].numeroPedidos],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)', 'rgb(80, 42, 110)', 'rgb(10, 42, 110)'],

          }
        ]
      }
    });
  }
 
}







