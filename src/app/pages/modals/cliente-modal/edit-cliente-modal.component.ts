import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';

@Component({
  selector: 'app-edit-cliente-modal',
  templateUrl: './edit-cliente-modal.component.html',
  styleUrls: ['./edit-cliente-modal.component.css']
})
export class EditClienteModalComponent implements OnInit {
  @Input() cliente!:Cliente;
  
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
