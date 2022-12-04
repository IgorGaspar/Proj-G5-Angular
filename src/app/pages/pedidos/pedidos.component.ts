import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/modules/pedidos.module';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.listarPedidos()
  }
  public pedidos:Pedido[] | undefined = []

  public async listarPedidos(){
    this.pedidos = await new PedidosService(this.http).lista();
  }

  
  

}


