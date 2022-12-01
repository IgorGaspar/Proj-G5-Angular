import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ModalClientesComponent } from './pages/modal-clientes/modal-clientes.component';
import { ModalPedidosComponent } from './pages/modal-pedidos/modal-pedidos.component';
import { ModalProdutosComponent } from './pages/modal-produtos/modal-produtos.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'clientes', component:ClientesComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'produtos', component:ProdutosComponent},
  {path:'modalClientes', component:ModalClientesComponent},
  {path:'modalPedidos', component:ModalPedidosComponent},
  {path:'modalProdutos', component:ModalProdutosComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
