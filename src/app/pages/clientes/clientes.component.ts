import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';
import { ClientesService } from 'src/app/services/clientes.service';
import { ViewClienteModalComponent } from 'src/app/pages/modals/cliente-modal/view-cliente-modal.component';
import { CreateClienteModalComponent } from 'src/app/pages/modals/cliente-modal/create-cliente-modal.component';
import { EditClienteModalComponent } from 'src/app/pages/modals/cliente-modal/edit-cliente-modal.component';
import { DeleteClienteModalComponent } from 'src/app/pages/modals/cliente-modal/delete-cliente-modal.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.listarClientes()
  }

  public clientes:Cliente[] | undefined = []

  public async listarClientes(){
    this.clientes = await new ClientesService(this.http).lista();
  }

  modalViewCliente(cliente:Cliente){
    const modalRef = this.modalService.open(ViewClienteModalComponent);
    modalRef.componentInstance.cliente = cliente;  
  }

  modalCreateCliente(){
    const modalRef = this.modalService.open(CreateClienteModalComponent);

  }

  modalEditCliente(cliente:Cliente){
    const modalRef = this.modalService.open(EditClienteModalComponent);
    modalRef.componentInstance.cliente = cliente;  
  }

  modalDeleteCliente(cliente:Cliente){
    const modalRef = this.modalService.open(DeleteClienteModalComponent);
    modalRef.componentInstance.cliente = cliente;  
  }

}

