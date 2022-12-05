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
export class PedidosModule { }

export interface Pedido {
  id:number,
  cliente_id:string,
  qtd_item:number,
  valor_total:number,
  data:Date

}


