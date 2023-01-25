import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Loja } from "src/app/modules/lojas.module";
import { LojasService } from "src/app/services/lojas.service";
import { LojaObservableComponent } from "../../observables/loja-observable/loja-observable.component";

@Component({
  selector: "app-create-loja-modal",
  templateUrl: "./create-loja-modal.component.html",
  styleUrls: ["./create-loja-modal.component.css"],
})
export class CreateLojaModalComponent implements OnInit {
  cadastros = 0;

  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal,
    public lojasService: LojasService,
    public lojaObservable: LojaObservableComponent
  ) {}

  public loja: Loja = {} as Loja;
  ngOnInit(): void {
    this.lojasCadastradas();
  }

  public async lojasCadastradas() {
    let conta = await new LojasService(this.http).lista();
    this.cadastros = conta ? conta.length : 0;
  }

  public cadastrarLoja() {
    let id = this.cadastros + 1;
    this.lojasService.adicionar({
      id: id,
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
