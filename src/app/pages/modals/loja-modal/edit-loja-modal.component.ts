import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Loja } from 'src/app/modules/lojas.module';
import { LojasService } from 'src/app/services/lojas.service';

@Component({
  selector: "app-edit-loja-modal",
  templateUrl: "./edit-loja-modal.component.html",
  styleUrls: ["./edit-loja-modal.component.css"],
})
export class EditLojaModalComponent implements OnInit {
  @Input() loja!: Loja;

  constructor(
    public activeModal: NgbActiveModal,
    public lojaService: LojasService
  ) {}

  ngOnInit(): void {}

  public editarLoja() {
    this.lojaService.atualizar({
      id: this.loja.id,
      nome: this.loja.nome,
      observacao: this.loja.observacao,
      cep: this.loja.cep,
      logradouro: this.loja.logradouro,
      numero: this.loja.numero,
      bairro: this.loja.bairro,
      cidade: this.loja.cidade,
      estado: this.loja.estado,
      complemento: this.loja.complemento,
      latitude: this.loja.latitude,
      longitude: this.loja.longitude,
    });
    this.activeModal.close(); 
    window.location.replace("/lojas");
  }
}
