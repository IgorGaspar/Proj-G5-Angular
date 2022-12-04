import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/modules/produtos.module';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ViewProdutoModalComponent } from 'src/app/pages/modals/produto-modal/view-produto-modal.component';
import { CreateProdutoModalComponent } from 'src/app/pages/modals/produto-modal/create-produto-modal.component';
import { EditProdutoModalComponent } from 'src/app/pages/modals/produto-modal/edit-produto-modal.component';
import { DeleteProdutoModalComponent } from 'src/app/pages/modals/produto-modal/delete-produto-modal.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private modalService: NgbModal
  ) { }
  
  ngOnInit(): void {
    this.listarProdutos()
  }

  public produtos:Produto[] | undefined = []

  public async listarProdutos(){
    this.produtos = await new ProdutosService(this.http).lista();
  }

  modalViewProduto(produto:Produto){
    const modalRef = this.modalService.open(ViewProdutoModalComponent);
    modalRef.componentInstance.produto = produto;
  }

  modalCreateProduto(){
    const modalRef = this.modalService.open(CreateProdutoModalComponent);
  }

  modalEditProduto(produto:Produto){
    const modalRef = this.modalService.open(EditProdutoModalComponent);
    modalRef.componentInstance.produto = produto;  
  }

  modalDeleteProduto(produto:Produto){
    const modalRef = this.modalService.open(DeleteProdutoModalComponent);
    modalRef.componentInstance.produto = produto;
  }

}
