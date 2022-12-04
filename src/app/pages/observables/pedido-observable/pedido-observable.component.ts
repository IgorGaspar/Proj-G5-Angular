import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PedidosComponent } from '../../pedidos/pedidos.component';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-pedido-observable',
  templateUrl: './pedido-observable.component.html',
  styleUrls: ['./pedido-observable.component.css']
})
export class PedidoObservableComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private PedidosComponent:PedidosComponent
  ) {
    // this.listaCadastrados()
   }

  ngOnInit(): void {
  }

  public pedidosCadastrados = 1

/*   public async listaCadastrados(){
    let lista = await new PedidosService(this.http).lista();
    this.pedidosCadastrados = lista ? lista.length : 0;
