import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Cliente } from "src/app/modules/clientes.module";
import { ClientesService } from "src/app/services/clientes.service";

@Component({
  selector: "app-edit-cliente-modal",
  templateUrl: "./edit-cliente-modal.component.html",
  styleUrls: ["./edit-cliente-modal.component.css"],
})
export class EditClienteModalComponent implements OnInit {
  @Input() cliente!: Cliente;

  constructor(
    public activeModal: NgbActiveModal,
    public clienteService: ClientesService
  ) {}

  ngOnInit(): void {}

  public editarCliente() {
    this.clienteService.atualizar({
      //Usa o serviço "adicionar" do ProdutoService de acordo com as variáveis abaixo.
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
      complemento: this.cliente.complemento,
    });
    this.activeModal.close(); //Fecha o Modal
    window.location.replace("/clientes"); // Redireciona novamente para a página, fazendo o refresh
  }
}
