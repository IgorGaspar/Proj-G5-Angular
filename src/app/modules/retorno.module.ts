import { Cliente } from './clientes.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RetornoModule { }

export interface Retorno {
  totalRegistros:number 
  paginaAtual:number
  maximoPaginas:number
  dados:[]
  mensagem?:string  
}
