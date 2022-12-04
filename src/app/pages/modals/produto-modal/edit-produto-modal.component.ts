import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';

@Component({
  selector: 'app-edit-produto-modal',
  templateUrl: './edit-produto-modal.component.html',
  styleUrls: ['./edit-produto-modal.component.css']
})
export class EditProdutoModalComponent implements OnInit {
  @Input() produto!:Produto;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
