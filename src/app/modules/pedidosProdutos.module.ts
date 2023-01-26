import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

  ]
})
export class PedidosProdutosModule { }

export interface PedidoProduto {
  id:number,
  pedidoId:number,
  produtoId:number,
  valor:number,
  quantidade:number
  produto_nome:string
  produto_valor:number
}
