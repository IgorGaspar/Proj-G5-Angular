import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }

export interface Produto {
  id:number 
  nome:string
  tipo:string
  descricao:string
  composicao:string  
  valor:number
  qtd_estoque:number
}


