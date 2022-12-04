import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
// import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modules/clientes.module';

@Injectable({
  providedIn: 'root'
}) 
export class ClientesService {

  constructor(private http:HttpClient) {}
  
    public async lista(){
      let clientes:Cliente[] | undefined = await firstValueFrom(this.http.get<Cliente[]>(`${environment.api}/clientes`))
      return  clientes;
    }

    public async adiciona(cliente:Cliente): Promise<Cliente | undefined> {
      let clienteAdd:Cliente | undefined = await firstValueFrom(this.http.post<Cliente>(`${environment.api}/clientes/`, cliente))
      return clienteAdd;
    }

}
