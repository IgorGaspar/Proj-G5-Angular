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
  descricao:string
  valor:number
  quantidadeEstoque:number
}


