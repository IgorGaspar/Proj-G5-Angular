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

  public async listaPedidosProdutos() {
    let pedidosProdutos: PedidoProduto[] | undefined = await firstValueFrom(
      this.http.get<PedidoProduto[]>(
        `${environment.api}/pedidos`,
        AppConstants.headerToken
      )
    );
    return pedidosProdutos;
  }
}
