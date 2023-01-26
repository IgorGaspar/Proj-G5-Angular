import { Retorno } from './../modules/retorno.module';
import { AppConstants } from "../app-constants";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { Loja } from "../modules/lojas.module"; 

@Injectable({
  providedIn: "root",
})
export class LojasService {
  constructor(private http: HttpClient) {}

  public async lista() {
    let retorno: Retorno= await firstValueFrom(
      this.http.get<Retorno>(
        `${environment.api}/lojas`,
        AppConstants.headerToken
      )
    );
    let lojas = retorno.dados;
    return lojas;
  }

  public async adicionar(loja: Loja): Promise<Loja | undefined> {
    let lojaAdd: Loja | undefined = await firstValueFrom(
      this.http.post<Loja>(
        `${environment.api}/lojas/`,
        loja,
        AppConstants.headerToken
      )
    );
    return lojaAdd;
  }

  public async atualizar(loja: Loja): Promise<Loja | undefined> {
    let lojaUpd: Loja | undefined = await firstValueFrom(
      this.http.put<Loja>(
        `${environment.api}/lojas/${loja.id}`,
        loja,
        AppConstants.headerToken
      )
    );
    return lojaUpd;
  }

  public async buscar(id: Number): Promise<Loja | undefined> {
    return await firstValueFrom(
      this.http.get<Loja | undefined>(
        `${environment.api}/lojas/${id}`,
        AppConstants.headerToken
      )
    );
  }

  public excluir(id: Number) {
    firstValueFrom(
      this.http.delete(
        `${environment.api}/lojas/${id}`,
        AppConstants.headerToken
      )
    );
  }
}
