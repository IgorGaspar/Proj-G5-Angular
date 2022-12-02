import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastrapedidoComponent } from './pages/cadastrapedido/cadastrapedido.component';
import { ClienteObservableComponent } from './pages/observables/cliente-observable/cliente-observable.component';
import { ProdutoObservableComponent } from './pages/observables/produto-observable/produto-observable.component';
import { PedidoObservableComponent } from './pages/observables/pedido-observable/pedido-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    PedidosComponent,
    ProdutosComponent,
    CadastrapedidoComponent,
    ClienteObservableComponent,
    ProdutoObservableComponent,
    PedidoObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
