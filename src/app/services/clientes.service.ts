import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modules/clientes.module';
import { Retorno } from '../modules/retorno.module';
import { AppConstants } from "./../app-constants";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor(private http: HttpClient) {}
  
    public async lista(pagina:number): Promise<Cliente[] | undefined>{
      let data = await firstValueFrom(
        this.http.get<Retorno>(`${environment.api}/clientes?page=${pagina}&take=10`,
          AppConstants.headerToken
        )
      );
      let clientes: Cliente[] | undefined = data.dados;
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
    console.log(clienteAdd);
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
        `${environment.api}/clientes/${id}`,
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

  public async InformacoesCliente(){
    let retorno:Retorno | undefined = await firstValueFrom(
      this.http.get<Retorno>(
        `${environment.api}/clientes?take=10`,
        AppConstants.headerToken
      )
    );
    console.log(retorno.maximoPaginas);
    return {totalRegistros: retorno.totalRegistros, numeroPaginas: retorno.maximoPaginas};
  }
}
