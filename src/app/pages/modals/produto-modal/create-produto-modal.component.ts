import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  
  //Método para verificar quantos produtos já estão cadastrados.
  public async produtosCadastrados(){
    let conta = await new ProdutosService(this.http).InformacoesProdutos()
    this.cadastros = conta ? conta.totalRegistros : 0;
  }

  public cadastrarProduto() {
   //Soma 1 à quantidade de produtos já cadastrados para gerar o próximo ID
    this.produtoService.adicionar({ //Usa o serviço "adicionar" do ProdutoService de acordo com as variáveis abaixo.
      id: 0,
      nome: this.produto.nome,
      descricao: this.produto.descricao,
      valor: this.produto.valor,
      quantidadeEstoque: this.produto.quantidadeEstoque
    })  
    //this.activeModal.close() //Fecha o Modal
    //window.location.replace('/produtos') // Redireciona novamente para a página, fazendo o refresh
  }
}