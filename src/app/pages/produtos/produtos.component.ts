import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/modules/produtos.module';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.listarProdutos()
  }

  public produtos:Produto[] | undefined = []

  public async listarProdutos(){
    this.produtos = await new ProdutosService(this.http).lista();
  }

}
