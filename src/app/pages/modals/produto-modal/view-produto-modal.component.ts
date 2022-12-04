import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';

@Component({
  selector: 'app-view-produto-modal',
  templateUrl: './view-produto-modal.component.html',
  styleUrls: ['./view-produto-modal.component.css']
})
export class ViewProdutoModalComponent implements OnInit {
  @Input() produto!:Produto;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
