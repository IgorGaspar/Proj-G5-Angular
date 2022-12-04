import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/modules/produtos.module';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-observable',
  templateUrl: './produto-observable.component.html',
  styleUrls: ['./produto-observable.component.css']
})
export class ProdutoObservableComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router: Router,
    private produtosService:ProdutosService
  ) { }

  ngOnInit(): void {
    this.listarProdutos()
  }

  public produtosCadastrados:Produto[] | undefined = []

  public async listarProdutos(){
    this.produtosCadastrados = await new ProdutosService(this.http).lista();
  }
}
