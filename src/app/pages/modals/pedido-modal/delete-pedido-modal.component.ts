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
    this.pedidosService = new PedidosService(this.http)
  }
  private pedidosService:PedidosService = {} as PedidosService
  public pedidos:Pedido[] | undefined = []

  public excluirPedido(id:Number) {
    firstValueFrom(this.http.delete(`${environment.api}/pedidos/${id}`))
  }

async excluir(pedido:Pedido){
    await this.pedidosService.excluirPedido(pedido.id)
    this.pedidos = await this.pedidosService.lista()
    this.activeModal.close()
    window.location.replace('/pedidos')
}
}
