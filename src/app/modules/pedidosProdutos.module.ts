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
  pedido_id:number,
  produto_id:number,
  valor:number,
  quantidade:number
}
