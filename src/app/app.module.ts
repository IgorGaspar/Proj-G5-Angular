import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


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
import { TelefonePipe } from './pipes/telefone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

//Define o padrão para brasileiro
registerLocaleData(ptBR)

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
    TelefonePipe,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //Importa o local para padrão português
    { provide: LOCALE_ID, useValue: 'pt'},
    //Importa o padrão de moeda para R$
    { 
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
