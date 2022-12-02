import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-observable',
  templateUrl: './pedido-observable.component.html',
  styleUrls: ['./pedido-observable.component.css']
})
export class PedidoObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pedidosCadastrados = 1
}
