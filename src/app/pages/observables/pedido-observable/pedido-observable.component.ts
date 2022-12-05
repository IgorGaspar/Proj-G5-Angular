import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/modules/pedidos.module';

@Component({
  selector: 'app-pedido-observable',
  templateUrl: './pedido-observable.component.html',
  styleUrls: ['./pedido-observable.component.css']
})
export class PedidoObservableComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private PedidosService:PedidosService
  ) {  }

  ngOnInit(): void {
    this.pedidosCadastrados()
  }

  public qtdPedidosCadastrados:number = 0

  public async pedidosCadastrados(){
    let conta = await new PedidosService(this.http).lista()
    this.qtdPedidosCadastrados = conta ? conta.length : 0;
  }
}
