import { Loja } from "./../../../modules/lojas.module";
import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-view-loja-modal",
  templateUrl: "./view-loja-modal.component.html",
  styleUrls: ["./view-loja-modal.component.css"],
})
export class ViewLojaModalComponent implements OnInit {
  @Input() loja!: Loja;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
