import { AppConstants } from "./../app-constants";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "../modules/clientes.module";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  public async lista() {
    let clientes: Cliente[] | undefined = await firstValueFrom(
      this.http.get<Cliente[]>(
        `${environment.api}/clientes`,
        AppConstants.headerToken
      )
    );
    return clientes;
  }

  public async adicionar(cliente: Cliente): Promise<Cliente | undefined> {
    let clienteAdd: Cliente | undefined = await firstValueFrom(
      this.http.post<Cliente>(
        `${environment.api}/clientes/`,
        cliente,
        AppConstants.headerToken
      )
    );
    return clienteAdd;
  }

  public async atualizar(cliente: Cliente): Promise<Cliente | undefined> {
    let clienteUpd: Cliente | undefined = await firstValueFrom(
      this.http.put<Cliente>(
        `${environment.api}/clientes/${cliente.id}`,
        cliente,
        AppConstants.headerToken
      )
    );
    return clienteUpd;
  }

  public async buscar(id: Number): Promise<Cliente | undefined> {
    return await firstValueFrom(
      this.http.get<Cliente | undefined>(
        `${environment.api}/cliente/${id}`,
        AppConstants.headerToken
      )
    );
  }

  public excluir(id: Number) {
    firstValueFrom(
      this.http.delete(
        `${environment.api}/clientes/${id}`,
        AppConstants.headerToken
      )
    );
  }
}
