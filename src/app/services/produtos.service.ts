import { Retorno } from 'src/app/modules/retorno.module';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Produto } from "../modules/produtos.module";
import { Injectable } from "@angular/core";
import { AppConstants } from "../app-constants";

@Injectable({
  providedIn: "root",
})
export class ProdutosService {
  constructor(private http: HttpClient) {}

  public async lista(pagina: number) {
    let retorno:Retorno | undefined = await firstValueFrom(
      this.http.get<Retorno>(
        `${environment.api}/produtos?page=${pagina}&take=11`,
        AppConstants.headerToken
      )
    );
    let produtos: Produto[] | undefined = retorno.dados;
    return produtos;
  }

  public async adicionar(produto: Produto): Promise<Produto | undefined> {
    let produtoAdd: Produto | undefined = await firstValueFrom(
      this.http.post<Produto>(
        `${environment.api}/produtos/`,
        produto,
        AppConstants.headerToken
      )
    );
    return produtoAdd;
  }

  public async atualizar(produto: Produto): Promise<Produto | undefined> {
    let produtoUpd: Produto | undefined = await firstValueFrom(
      this.http.put<Produto>(
        `${environment.api}/produtos/${produto.id}`,
        produto,
        AppConstants.headerToken
      )
    );
    return produtoUpd;
  }

  public async buscar(id: Number): Promise<Produto | undefined> {
    return await firstValueFrom(
      this.http.get<Produto | undefined>(
        `${environment.api}/produtos/${id}`,
        AppConstants.headerToken
      )
    );
  }

  public excluir(id: Number) {
    firstValueFrom(
      this.http.delete(
        `${environment.api}/produtos/${id}`,
        AppConstants.headerToken
      )
    );
  }

  public async InformacoesProdutos(){
    let retorno:Retorno | undefined = await firstValueFrom(
      this.http.get<Retorno>(
        `${environment.api}/produtos`,
        AppConstants.headerToken
      )
    );
    return {totalRegistros: retorno.totalRegistros, numeroPaginas: retorno.maximoPaginas};
  }
}
