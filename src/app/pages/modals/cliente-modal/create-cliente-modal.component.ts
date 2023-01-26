import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteObservableComponent } from '../../observables/cliente-observable/cliente-observable.component';


@Component({
  selector: 'app-create-cliente-modal',
  templateUrl: './create-cliente-modal.component.html',
  styleUrls: ['./create-cliente-modal.component.css']
})
export class CreateClienteModalComponent implements OnInit {

  
  cadastros = 0
  
  constructor(
    private http:HttpClient,
    public activeModal:NgbActiveModal,
    public clienteService:ClientesService,
    public ClienteObservableComponent: ClienteObservableComponent
    ) { }
  
  public cliente:Cliente = {} as Cliente
  ngOnInit(): void {
    this.clientesCadastrados()
  }

  public async clientesCadastrados(){
    let conta = await new ClientesService (this.http).lista(1)
    this.cadastros = conta ? conta.length : 0
  }

  public cadastrarCliente() {
    console.log(this.cliente);
    this.clienteService.adicionar({
      id: this.cliente.id,
      nome: this.cliente.nome,
      telefone: this.cliente.telefone,
      email: this.cliente.email,
      cpf: this.cliente.cpf,
      cep: this.cliente.cep,
      logradouro: this.cliente.logradouro,
      numero: this.cliente.numero,
      bairro: this.cliente.bairro,
      cidade: this.cliente.cidade,
      estado: this.cliente.estado,
      complemento: this.cliente.complemento
    })  
    //this.activeModal.close() //Fecha o Modal
   // window.location.replace('/clientes') // Redireciona novamente para a página, fazendo o refresh  
  }
  
}
