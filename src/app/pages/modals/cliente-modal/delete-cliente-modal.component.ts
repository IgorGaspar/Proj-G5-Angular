import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';

@Component({
  selector: 'app-delete-cliente-modal',
  templateUrl: './delete-cliente-modal.component.html',
  styleUrls: ['./delete-cliente-modal.component.css']
})
export class DeleteClienteModalComponent implements OnInit {
  @Input() cliente!:Cliente;
  
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
