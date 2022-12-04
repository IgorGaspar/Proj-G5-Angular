import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';

@Component({
  selector: 'app-create-produto-modal',
  templateUrl: './create-produto-modal.component.html',
  styleUrls: ['./create-produto-modal.component.css']
})
export class CreateProdutoModalComponent implements OnInit {
  @Input() produto!:Produto;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
