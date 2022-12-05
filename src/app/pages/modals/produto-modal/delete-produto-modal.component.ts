import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-produto-modal',
  templateUrl: './delete-produto-modal.component.html',
  styleUrls: ['./delete-produto-modal.component.css']
})
export class DeleteProdutoModalComponent implements OnInit {
  @Input() produto!:Produto;
  
  constructor(
    private http:HttpClient,
    private router:Router,
    public activeModal: NgbActiveModal,
    public produtoService: ProdutosService
    ) { }

  ngOnInit(): void {
  }
  public reload() {
    window.location.reload();
  }

  public excluirProduto() {

    this.produtoService.excluir(this.produto.id)
    this.activeModal.close() //Fecha o Modal
    window.location.replace('/produtos') // Redireciona novamente para a página, fazendo o refresh
  }
}
