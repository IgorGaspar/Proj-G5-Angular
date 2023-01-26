import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PedidoProduto } from './pedidosProdutos.module';
import { Cliente } from './clientes.module';
import { Produto } from './produtos.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

  ]
})
export class PedidosModule { }

export interface Pedido {
  id:number,
  clienteId:number,
  qtd_item:number,
  valorTotal:number,
  data:Date
  pedidosProdutos:PedidoProduto[]
  cliente_nome:string
  produto_nome:string
  produto_valor:number
}


