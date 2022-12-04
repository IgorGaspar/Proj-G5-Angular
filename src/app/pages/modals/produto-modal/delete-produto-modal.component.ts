import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';

@Component({
  selector: 'app-delete-produto-modal',
  templateUrl: './delete-produto-modal.component.html',
  styleUrls: ['./delete-produto-modal.component.css']
})
export class DeleteProdutoModalComponent implements OnInit {
  @Input() produto!:Produto;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
