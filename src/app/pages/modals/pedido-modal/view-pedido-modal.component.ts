import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/modules/pedidos.module';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';
/*import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/modules/produtos.module';*/

@Component({
  selector: 'app-view-pedido-modal',
  templateUrl: './view-pedido-modal.component.html',
  styleUrls: ['./view-pedido-modal.component.css']
})
export class ViewPedidoModalComponent implements OnInit {
  @Input() pedido!:Pedido;
  //@Input() produto!:Produto;

  constructor(
    public activeModal:NgbActiveModal,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listarPedidos()
    //this.listarProdutos()
  }
  public pedidos:Pedido[] | undefined = []

  public async listarPedidos(){
    this.pedidos = await new PedidosService(this.http).lista();
  }

  /*public Produtos:Produto[] | undefined = []

  public async listarProdutos(){
    this.Produtos = await new ProdutosService(this.http).lista();
  }*/

}
