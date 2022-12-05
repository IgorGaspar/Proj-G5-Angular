import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ProdutoObservableComponent } from '../../observables/produto-observable/produto-observable.component';

@Component({
  selector: 'app-create-produto-modal',
  templateUrl: './create-produto-modal.component.html',
  styleUrls: ['./create-produto-modal.component.css']
})
export class CreateProdutoModalComponent implements OnInit {
 

  cadastros = 0

  constructor(
    private http:HttpClient,
    public activeModal: NgbActiveModal,
    public produtoService: ProdutosService,
    public produtoObservableComponent:ProdutoObservableComponent
  ) { }

  public produto:Produto = {} as Produto
  ngOnInit(): void {
    this.produtosCadastrados()
  }

  public async produtosCadastrados(){
    let conta = await new ProdutosService(this.http).lista()
    this.cadastros = conta ? conta.length : 0;
  }

  public cadastrarProduto() {
    let id = (this.cadastros + 1)
    this.produtoService.adicionar({
      id: id,
      nome: this.produto.nome,
      tipo: this.produto.tipo,
      descricao: this.produto.descricao,
      composicao: this.produto.composicao,
      valor: this.produto.valor,
      qtd_estoque: this.produto.qtd_estoque
    })    
  }
}