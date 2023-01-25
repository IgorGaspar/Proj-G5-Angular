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
  id:any 
  nome:string 
  telefone:number 
  email:string  
  cpf:number 
  cep:number 
  logradouro:string 
  numero:number 
  bairro:string 
  cidade:string 
  estado:string 
  complemento:string  
}
