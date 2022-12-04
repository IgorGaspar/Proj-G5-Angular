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
  id:Number,
  cliente_id:String,
  qtd_item:Number,
  valor_total:any,
  data:Date


}


