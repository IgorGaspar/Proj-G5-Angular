import { PedidosProdutosService } from 'src/app/services/pedidosProdutos.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from "../modules/pedidos.module";
import { PedidoProduto } from '../modules/pedidosProdutos.module';
import { ClientesService } from './clientes.service';
import { ProdutosService } from './produtos.service';
import { Produto } from '../modules/produtos.module';
import { Retorno } from '../modules/retorno.module';
import { Cliente } from "../modules/clientes.module";
import { AppConstants } from "../app-constants";

@Injectable({
  providedIn: "root",
})
export class PedidosService {
  constructor(
    private http: HttpClient,
    private clientesService: ClientesService,
    private produtosService: ProdutosService,
    private pedidoProdutoService: PedidosProdutosService
  ) { }

  public async listaPedidos() {
    let dados: Retorno | undefined = await firstValueFrom(
      this.http.get<Retorno>(
        `${environment.api}/pedidos`,
        AppConstants.headerToken
      )
    );
    let pedidos: Pedido[] = dados.dados;
    return pedidos;
  }
  public async listaPedidosProdutos(produtoId: number) {
    let pedidosProdutos: PedidoProduto[] | undefined = await firstValueFrom(
      this.http.get<PedidoProduto[]>(
        `${environment.api}/pedidoProdutos?pedidoId=${produtoId}`,
        AppConstants.headerToken
      )
    );
    let produtos:Produto[] = await this.produtosService.lista() 
       // pedidosProdutos.forEach(pedidoProduto => { //para cada pedido
      //   pedidoProduto.produto_nome = produtos.filter(x => x.id == pedidoProduto.produto_id)[0].nome //filtra o pedido.Produto de acordo com o pedido.id recebido
      //   pedidoProduto.produto_valor = produtos.filter(x => x.id == pedidoProduto.produto_id)[0].valor
      // })
    return pedidosProdutos;
  }

  public async adicionar(pedido: Pedido): Promise<Pedido | undefined> {
    let pedidoAdd: Pedido | undefined = await firstValueFrom(
      this.http.post<Pedido>(
        `${environment.api}/pedidos/`,
        pedido,
        AppConstants.headerToken
      )
    );
    return pedidoAdd;
  }

  public async atualizar(pedido: Pedido): Promise<Pedido | undefined> {
    let pedidoUpd: Pedido | undefined = await firstValueFrom(
      this.http.put<Pedido>(
        `${environment.api}/pedidos/${pedido.id}`,
        pedido,
        AppConstants.headerToken
      )
    );
    return pedidoUpd;
  }

  public async buscar(id: Number): Promise<Pedido | undefined> {
    return await firstValueFrom(
      this.http.get<Pedido | undefined>(`${environment.api}/pedidos/${id}`)
    );
  }
  public async buscarProduto( pedido_id: Number): Promise<PedidoProduto | undefined> {
    return await firstValueFrom(
      this.http.get<PedidoProduto | undefined>(
        `${environment.api}/pedidosProdutos/${pedido_id}`
      )
    );
  }

  public excluirPedido(id: Number) {
    firstValueFrom(this.http.delete(`${environment.api}/pedidos/${id}`));
  }

  public async buscarProdutoPorAno(ano: number): Promise<Pedido[]>{
    let retorno: Retorno = await firstValueFrom(this.http.get<Retorno>(`${environment.api}/pedidos?ano=${ano}`)) 
    let pedidos: Pedido[] = retorno.dados;
    return pedidos;
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
