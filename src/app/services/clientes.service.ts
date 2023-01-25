import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modules/clientes.module';
import { Retorno } from '../modules/retorno.module';

@Injectable({
  providedIn: 'root'
}) 
export class ClientesService {

  constructor(private http:HttpClient) { }
  
    public async lista(): Promise<Cliente[] | undefined>{
      let data = await firstValueFrom(this.http.get<Retorno>(`${environment.api}/clientes?page=1&take=2`));
      let clientes: Cliente[] | undefined = data.dados;
      return  clientes;
    }

    public async adicionar(cliente:Cliente): Promise<Cliente | undefined> {
      let clienteAdd:Cliente | undefined = await firstValueFrom(this.http.post<Cliente>(`${environment.api}/clientes/`, cliente))
      return clienteAdd;
    }

    public async atualizar(cliente:Cliente): Promise<Cliente | undefined> {
      let clienteUpd: Cliente | undefined = await firstValueFrom(this.http.put<Cliente>(`${environment.api}/clientes/${cliente.id}`, cliente))
      return clienteUpd;
  }

  public async buscar(id:Number): Promise<Cliente | undefined> {
    let cliente: Cliente | undefined  = await firstValueFrom(this.http.get<Cliente>(`${environment.api}/clientes/${id}`))
    return  cliente;
}

public excluir(id:Number) {
    firstValueFrom(this.http.delete(`${environment.api}/clientes/${id}`))
}

}
