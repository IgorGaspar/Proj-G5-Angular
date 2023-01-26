import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AutenticacaoGuard } from './services/autenticacao.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LojasComponent } from './pages/lojas/lojas.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate: [AutenticacaoGuard]},
  {path:'clientes', component:ClientesComponent, canActivate: [AutenticacaoGuard]},
  {path:'lojas', component:LojasComponent, canActivate:[AutenticacaoGuard]},
  {path:'pedidos', component:PedidosComponent, canActivate: [AutenticacaoGuard]},
  {path:'produtos', component:ProdutosComponent, canActivate: [AutenticacaoGuard]},
  {path:'**', component:PageNotFoundComponent, canActivate: [AutenticacaoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
