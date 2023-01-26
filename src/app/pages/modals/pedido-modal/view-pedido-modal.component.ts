import { PedidosProdutosService } from './../../../services/pedidosProdutos.service';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from './../../../services/clientes.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/modules/pedidos.module';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidoProduto } from 'src/app/modules/pedidosProdutos.module';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-view-pedido-modal',
  templateUrl: './view-pedido-modal.component.html',
  styleUrls: ['./view-pedido-modal.component.css']
})
export class ViewPedidoModalComponent implements OnInit {
  @Input() pedido!:Pedido;

  public pedidos:Pedido| undefined


  constructor(
    private http: HttpClient,
    public activeModal:NgbActiveModal,
    public pedidosService:PedidosService,
    public clienteService: ClientesService,
    public pedidoProdutoService: PedidosProdutosService,
    public produtoService: ProdutosService
    ) { }

  ngOnInit(): void {
    this.buscarProdutoPedido();
  }
  
  public async buscarProdutoPedido() {
    this.pedidos = await this.pedidosService.buscar(this.pedido.id);
    let cliente = await this.clienteService.buscar(this.pedido.clienteId);
    cliente?.nome != null ? this.pedidos.cliente_nome = cliente.nome : "";
    let pedidosProdutos: PedidoProduto[] = await this.pedidoProdutoService.listaPedidosProdutos(this.pedido.id);
    pedidosProdutos.map(async pedidoProduto => {
      let data= await this.produtoService.buscar(pedidoProduto.pedido_id); 
      
    })
   
  }

}
