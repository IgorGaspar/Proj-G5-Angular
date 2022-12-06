import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Pedido } from 'src/app/modules/pedidos.module';
import { PedidosService } from 'src/app/services/pedidos.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-delete-pedido-modal',
  templateUrl: './delete-pedido-modal.component.html',
  styleUrls: ['./delete-pedido-modal.component.css']
})
export class DeletePedidoModalComponent implements OnInit {
  @Input() pedido!:Pedido;

  constructor(
    public activeModal:NgbActiveModal,
    private http:HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void {
    //this.pedidosService = new PedidosService
  }
  private pedidosService:PedidosService = {} as PedidosService
  public pedidos:Pedido[] | undefined = []

  public excluirPedido(id:Number) {
    firstValueFrom(this.http.delete(`${environment.api}/pedidos/${id}`))
    this.activeModal.close()
    window.location.replace('/pedidos')
  }

// async excluir(pedido:Pedido){
//     await this.pedidosService.excluirPedido(pedido.id)
//     this.pedidos = await this.pedidosService.listaPedidos()
//     this.activeModal.close()
//     window.location.replace('/pedidos')
// }

// public excluirPedido(pedido:Pedido) {

//    this.pedidosService.excluirPedido(this.pedido.id)
//    this.activeModal.close() //Fecha o Modal
//    window.location.replace('/pedidos') // Redireciona novamente para a página, fazendo o refresh
//  }
}
