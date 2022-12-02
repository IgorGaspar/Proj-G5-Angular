import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-observable',
  templateUrl: './produto-observable.component.html',
  styleUrls: ['./produto-observable.component.css']
})
export class ProdutoObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public produtosCadastrados = 1
}
