import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-edit-pedido-modal',
  templateUrl: './edit-pedido-modal.component.html',
  styleUrls: ['./edit-pedido-modal.component.css']
})
export class EditPedidoModalComponent implements OnInit {
  @Input() cliente!:Cliente;

  constructor(
    public activeModal:NgbActiveModal,
    public clienteService: ClientesService
  ) { }

  ngOnInit(): void {
  }

}
