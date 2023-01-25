import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { AppConstants } from "../app-constants";
import { Pedido } from "../modules/pedidos.module";
import { PedidoProduto } from "../modules/pedidosProdutos.module";

@Injectable({
  providedIn: "root",
})
export class PedidosProdutosService {
  constructor(private http: HttpClient) {}


  public async adicionar(pedidoProduto:PedidoProduto): Promise<PedidoProduto | undefined> {
    let pedidoProdutoAdd: PedidoProduto| undefined = await firstValueFrom(this.http.post<PedidoProduto>(`${environment.api}/pedidoProdutos/`,pedidoProduto ))
    return pedidoProdutoAdd;
  }

  public async atualizar(pedidoProduto:PedidoProduto): Promise<PedidoProduto | undefined> {
    let pedidoProdutoUpd: PedidoProduto | undefined = await firstValueFrom(this.http.put<PedidoProduto>(`${environment.api}/pedidoProdutos/${pedidoProduto.id}`,pedidoProduto ))
    return pedidoProdutoUpd;
}

public async buscar(id:Number): Promise<PedidoProduto | undefined> {
  let pedidoProduto:PedidoProduto  | undefined  = await firstValueFrom(this.http.get<PedidoProduto>(`${environment.api}/pedidoProdutos/${id}`))
  return pedidoProduto ;
}

public excluir(id:Number) {
  firstValueFrom(this.http.delete(`${environment.api}/s/${id}`))
}
  public async listaPedidosProdutos(pedidoId: number) {
    let pedidosProdutos: PedidoProduto[] | undefined = await firstValueFrom(
      this.http.get<PedidoProduto[]>(
        `${environment.api}/pedidoProdutos/?pedidoId=${pedidoId}`,
        AppConstants.headerToken
      )
    );
    return pedidosProdutos;
  }
}
