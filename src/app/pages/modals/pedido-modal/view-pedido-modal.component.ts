import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/modules/pedidos.module';
import { PedidosService } from 'src/app/services/pedidos.service';


@Component({
  selector: 'app-view-pedido-modal',
  templateUrl: './view-pedido-modal.component.html',
  styleUrls: ['./view-pedido-modal.component.css']
})
export class ViewPedidoModalComponent implements OnInit {
  @Input() pedido!:Pedido;

  public pedidos:Pedido[] | undefined = []

  constructor(
    public activeModal:NgbActiveModal,
    public pedidosService:PedidosService
    ) { }

  ngOnInit(): void {
  }
  
  public buscarProdutoPedido() {
    this.pedidosService.buscarProduto(this.pedido.id)
    console.log(this.buscarProdutoPedido)
  }

}
