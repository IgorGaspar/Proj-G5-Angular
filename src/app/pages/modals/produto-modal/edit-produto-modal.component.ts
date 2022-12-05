import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-edit-produto-modal',
  templateUrl: './edit-produto-modal.component.html',
  styleUrls: ['./edit-produto-modal.component.css']
})
export class EditProdutoModalComponent implements OnInit {
  @Input() produto!:Produto;

  constructor(
    public activeModal: NgbActiveModal,
    public produtoService: ProdutosService
    ) { }

  ngOnInit(): void {
  }

  public editarProduto() {
    this.produtoService.atualizar({ //Usa o serviço "adicionar" do ProdutoService de acordo com as variáveis abaixo.
      id: this.produto.id,
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
