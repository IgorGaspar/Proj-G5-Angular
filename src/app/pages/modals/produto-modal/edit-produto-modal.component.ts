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
      descricao: this.produto.descricao,
      valor: this.produto.valor,
      quantidadeEstoque: this.produto.quantidadeEstoque
    })  
    this.activeModal.close() //Fecha o Modal
    window.location.replace('/produtos') // Redireciona novamente para a página, fazendo o refresh
  }

}
