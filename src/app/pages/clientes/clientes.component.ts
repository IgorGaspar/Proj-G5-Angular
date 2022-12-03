import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModalComponent } from '../modals/cliente-modal/view-cliente-modal.component';

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

  abrirModalCliente(cliente:Cliente){
    const modalRef = this.modalService.open(ClienteModalComponent);
    modalRef.componentInstance.cliente = cliente;  
  }
}

