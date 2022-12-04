import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';

@Component({
  selector: 'app-view-cliente-modal',
  templateUrl: './view-cliente-modal.component.html',
  styleUrls: ['./view-cliente-modal.component.css']
})
export class ViewClienteModalComponent implements OnInit {
  @Input() cliente!:Cliente;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
