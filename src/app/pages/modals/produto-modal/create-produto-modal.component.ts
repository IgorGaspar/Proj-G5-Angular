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
  // @Input() produto!: Produto;

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
    let conta = await new ProdutosService(this.http).lista()
    this.cadastros = conta ? conta.length : 0;
  }

  public cadastrarProduto() {
    let id = (this.cadastros + 1) //Soma 1 à quantidade de produtos já cadastrados para gerar o próximo ID
    this.produtoService.adicionar({ //Usa o serviço "adicionar" do ProdutoService de acordo com as variáveis abaixo.
      id: id,
      nome: this.produto.nome,
      tipo: this.produto.tipo,
      descricao: this.produto.descricao,
      composicao: this.produto.composicao,
      valor: this.produto.valor,
      qtd_estoque: this.produto.qtd_estoque
    })  
    this.activeModal.close() //Fecha o Modal
    window.location.replace('/produtos') // Redireciona novamente para a página, fazendo o refresh
  }
}