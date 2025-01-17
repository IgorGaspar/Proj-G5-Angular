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
import { LoginStatusService } from 'src/app/services/login-status.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private loginStatusService: LoginStatusService,
    private modalService: NgbModal
  ) { }
  
  // Se o usuário não estiver logado, será redirecionado para a tela de login, senão, é exibida a tela de clientes
   ngOnInit(): void {
    if(this.loginStatusService.redirectNãoLogado()) return 
     this.listarClientes(1)
     this.listarInformacoesCliente()
  }

  public clientes:Cliente[] | undefined = []



  private paginaAtual: number= 1;
  private numeroPaginas: number = 1


  public async listarClientes(pagina: number){
    
    this.clientes = await new ClientesService(this.http).lista(pagina);
    console.log(this.clientes)
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

  public async listarInformacoesCliente(){
    let pagina = await new ClientesService(this.http).InformacoesCliente();
    this.numeroPaginas = pagina.numeroPaginas;
  }

  proximaPagina(){
    console.log(this.numeroPaginas)
    if(this.paginaAtual<this.numeroPaginas) this.listarClientes((this.paginaAtual = this.paginaAtual + 1))
  }

  paginaAnterior(){
    if(this.paginaAtual>1) this.listarClientes((this.paginaAtual = this.paginaAtual - 1))
  }

}

