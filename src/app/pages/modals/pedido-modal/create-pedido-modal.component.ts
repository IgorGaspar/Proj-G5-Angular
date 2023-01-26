import { Pedido } from './../../../modules/pedidos.module';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-create-pedido-modal',
  templateUrl: './create-pedido-modal.component.html',
  styleUrls: ['./create-pedido-modal.component.css']
})
export class CreatePedidoModalComponent implements OnInit {
  
  @Input() cliente!:Cliente;

  public produto:Pedido = {} as Pedido
  constructor(
    public activeModal:NgbActiveModal,
    public clienteService: ClientesService) { }

  ngOnInit(): void {
  }

  cadastrarProduto()
  {}

}
