import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/modules/clientes.module';

@Component({
  selector: 'app-create-cliente-modal',
  templateUrl: './create-cliente-modal.component.html',
  styleUrls: ['./create-cliente-modal.component.css']
})
export class CreateClienteModalComponent implements OnInit {
  @Input() cliente!:Cliente;
  
  
  constructor(
    public activeModal:NgbActiveModal
    ) { }
  
  ngOnInit(): void {
  }
  
}
