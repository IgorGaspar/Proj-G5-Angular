import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-delete-cliente-modal',
  templateUrl: './delete-cliente-modal.component.html',
  styleUrls: ['./delete-cliente-modal.component.css']
})
export class DeleteClienteModalComponent implements OnInit {
  @Input() cliente!:Cliente;
  
  constructor(private http:HttpClient,
    private router:Router,
    public activeModal: NgbActiveModal,
    public clienteService: ClientesService) { }

    ngOnInit(): void {
    }
    public reload() {
      window.location.reload();
    }

    public excluirCliente() {

      this.clienteService.excluir(this.cliente.id)
      this.activeModal.close() //Fecha o Modal
      window.location.replace('/clientes') // Redireciona novamente para a página, fazendo o refresh
    }

}
