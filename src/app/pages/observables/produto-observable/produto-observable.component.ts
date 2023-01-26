import { HttpClient } from '@angular/common/http';
import { createInjectableType } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/modules/produtos.module';
import { ProdutosService } from 'src/app/services/produtos.service';

@Injectable({
  providedIn: 'root'
})


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
    this.produtosCadastrados()
  }

  public qtdProdutosCadastrados:number = 0

  public async produtosCadastrados(){
    let conta = await new ProdutosService(this.http).TotalProdutos()
    this.qtdProdutosCadastrados = conta ? conta : 0;
  }
}
