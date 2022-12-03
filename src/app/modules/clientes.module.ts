import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }

export interface Cliente {
  id:number 
  nome:string 
  telefone:number 
  email:string  
  cpf:number 
  cep:string 
  logradouro:string 
  numero:number 
  bairro:string 
  cidade:string 
  estado:string 
  complemento:string  
}
