import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/modules/pedidos.module';
import { ViewPedidoModalComponent } from '../modals/pedido-modal/view-pedido-modal.component';
import { CreatePedidoModalComponent } from 'src/app/pages/modals/pedido-modal/create-pedido-modal.component';
import { EditPedidoModalComponent } from 'src/app/pages/modals/pedido-modal/edit-pedido-modal.component';
import { DeletePedidoModalComponent } from 'src/app/pages/modals/pedido-modal/delete-pedido-modal.component';

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

  modalViewPedido(pedido:Pedido){
    const modalRef = this.modalService.open(ViewPedidoModalComponent);
    modalRef.componentInstance.pedido = pedido;
  }
  

}


