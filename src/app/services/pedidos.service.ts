import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from "../modules/pedidos.module";
import { PedidoProduto } from '../modules/pedidosProdutos.module';
import { ClientesService } from './clientes.service';
import { ProdutosService } from './produtos.service';
import { Produto } from '../modules/produtos.module';
import { Cliente } from '../modules/clientes.module';

@Injectable({
  providedIn: 'root'
})

export class PedidosService {

  constructor(
    private http: HttpClient,
    private clientesService: ClientesService,
    private produtosService: ProdutosService
  ) { }

  public async listaPedidos() {
    let pedidos: Pedido[] | undefined = await firstValueFrom(this.http.get<Pedido[]>(`${environment.api}/pedidos`)) //Puxa os Pedidos
    let pedidosProdutos: PedidoProduto[] = await this.listaPedidosProdutos() //Puxa os pedidosProdutos através do método abaixo.
    let produtos: Produto[] = await this.produtosService.lista() //Puxa os produtos através do ProdutoService.
    let clientes: Cliente[] = await this.clientesService.lista() //Puxa os clientes através do ClienteService.
    pedidos.forEach(pedido => { //para cada pedido
      pedido.pedidosProdutos = pedidosProdutos.filter(x => x.pedido_id == pedido.id) //filtra o pedido.Produto de acordo com o pedido.id recebido
      pedido.clientes = clientes.filter(x => x.id == pedido.cliente_id)
      //pedido.produtos = produtos.filter(x => x.id == pedidosProdutos.produto_id)
    })
    return pedidos;
  }


  public async listaPedidosProdutos() {
    let pedidosProdutos: PedidoProduto[] | undefined = await firstValueFrom(this.http.get<PedidoProduto[]>(`${environment.api}/pedidosProdutos`))
    return pedidosProdutos;
  }

  public async adicionar(pedido: Pedido): Promise<Pedido | undefined> {
    let pedidoAdd: Pedido | undefined = await firstValueFrom(this.http.post<Pedido>(`${environment.api}/pedidos/`, pedido))
    return pedidoAdd;
  }

  public async atualizar(pedido: Pedido): Promise<Pedido | undefined> {
    let pedidoUpd: Pedido | undefined = await firstValueFrom(this.http.put<Pedido>(`${environment.api}/pedidos/${pedido.id}`, pedido))
    return pedidoUpd;
  }

  public async buscar(id: Number): Promise<Pedido | undefined> {
    return await firstValueFrom(this.http.get<Pedido | undefined>(`${environment.api}/pedidos/${id}`))
  }

  public async buscarProduto(pedido_id: Number): Promise<PedidoProduto | undefined> {
    return await firstValueFrom(this.http.get<PedidoProduto | undefined>(`${environment.api}/pedidosProdutos/${pedido_id}`))
  }

  public excluirPedido(id: Number) {
    firstValueFrom(this.http.delete(`${environment.api}/pedidos/${id}`))
  }

  //Método para pegar o ID de um item do array
  //public static getById(idPedido:number) {
  //Busca o produto na lista pelo id informado
  //return this.listaPedidosProdutos.filter(produto => produto.produto_id == idPedido)[0]
  //}

  //Método para pegar o produto do ID conseguido em getByID
  //public static getIndexByClient(client:Cliente){
  //Busca o index do produto localizado na variável seguinte
  //return this.listOfClients.indexOf(client)
  //}


}
