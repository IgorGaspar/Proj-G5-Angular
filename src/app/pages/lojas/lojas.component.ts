import { Loja } from "./../../modules/lojas.module";
import { LojasService } from "./../../services/lojas.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ViewLojaModalComponent } from "../modals/loja-modal/view-loja-modal.component";
import { CreateLojaModalComponent } from "../modals/loja-modal/create-loja-modal.component";
import { EditLojaModalComponent } from "../modals/loja-modal/edit-loja-modal.component";
import { DeleteLojaModalComponent } from "../modals/loja-modal/delete-loja-modal.component";
import { LoginStatusService } from "src/app/services/login-status.service";

@Component({
  selector: "app-lojas",
  templateUrl: "./lojas.component.html",
  styleUrls: ["./lojas.component.css"],
})
export class LojasComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private loginStatusService: LoginStatusService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.loginStatusService.redirectNãoLogado()) return;
    this.listarLojas();
    console.log("lojas")
    console.log(this.lojas)
  }

  public lojas: Loja[] | undefined = [];

  public async listarLojas() {
    this.lojas = await new LojasService(this.http).lista();
  }

  modalViewLoja(loja: Loja) {
    const modalRef = this.modalService.open(ViewLojaModalComponent);
    modalRef.componentInstance.loja = loja;
  }

  modalCreateLoja() {
    const modalRef = this.modalService.open(CreateLojaModalComponent);
  }

  modalEditLoja(loja: Loja) {
    const modalRef = this.modalService.open(EditLojaModalComponent);
    modalRef.componentInstance.loja = loja;
  }

  modalDeleteLoja(loja: Loja) {
    const modalRef = this.modalService.open(DeleteLojaModalComponent);
    modalRef.componentInstance.loja = loja;
  }
}
