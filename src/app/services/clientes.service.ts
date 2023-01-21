import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modules/clientes.module';

@Injectable({
  providedIn: 'root'
}) 
export class ClientesService {

  constructor(private http:HttpClient) { }
  
    public async lista(){
      let clientes: Cliente[] | undefined = await firstValueFrom(this.http.get<Cliente[]>(`${environment.api}/clientes`))
      
      return  clientes;
    }

    public async adicionar(cliente:Cliente): Promise<Cliente | undefined> {
      let clienteAdd:Cliente | undefined = await firstValueFrom(this.http.post<Cliente>(`${environment.api}/clientes/`, cliente))
      console.log(clienteAdd);
      return clienteAdd;
    }

    public async atualizar(cliente:Cliente): Promise<Cliente | undefined> {
      let clienteUpd: Cliente | undefined = await firstValueFrom(this.http.put<Cliente>(`${environment.api}/clientes/${cliente.id}`, cliente))
      return clienteUpd;
  }

  public async buscar(id:Number): Promise<Cliente | undefined> {
    return await firstValueFrom(this.http.get<Cliente | undefined>(`${environment.api}/cliente/${id}`))
}

public excluir(id:Number) {
    firstValueFrom(this.http.delete(`${environment.api}/clientes/${id}`))
}

}
